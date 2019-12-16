const request = require('request');
const CONFIGURATION = require('./configuration');
const fs = require('fs');

getRequest = (options, json = true) => new Promise((resolve, reject) => {
    request.get(options, function (err, resp, body) {
        if (err) {
            reject(err);
        } else {
            if (json) {
                resolve(JSON.parse(body));
            } else {
                resolve(body);
            }
        }
    });
});

async function main(projectId, type) {
    // Setting URL and headers for request
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': CONFIGURATION.authToken
    }
    const options = {
        url: CONFIGURATION.apiUrl + 'projects/' + projectId + '/work_packages?filters=[{ "updatedAt": { "operator": ">t-", "values":[1]}}]',
        method: 'GET',
        headers: headers,
    }
    await getRequest(options).then(async function (response) {
        const totalWorkPackages = response.total;
        let totalLength = Number(totalWorkPackages) / 50;
        totalLength = Math.trunc(totalLength) + 1;
        let total = totalWorkPackages;
        let offset = 0;
        for (let i = 0; i < totalLength; i++) {
            offset = i + 1;
            if (i === Number(totalLength - 1)) {
                options.url = CONFIGURATION.apiUrl + 'projects/' + projectId + '/work_packages?offset=' + offset + '&pageSize=' + total + '&filters=[{ "updatedAt": { "operator": ">t-", "values":[1]}}]';
            } else {
                total = total - 50;
                options.url = CONFIGURATION.apiUrl + 'projects/' + projectId + '/work_packages?offset=' + offset + '&pageSize=' + 50 + '&filters=[{ "updatedAt": { "operator": ">t-", "values":[1]}}]';
            }
            await getRequest(options).then(async function (result) {
                workPackages = result['_embedded']['elements'];
                for (const item of workPackages) {
                    if (item['_links']['attachments']) {
                        let mdContent = '';
                        let sourceBaseUrl = '';
                        sourceBaseUrl = item[CONFIGURATION.cleanUrlField];
                        if (sourceBaseUrl) {
                            sourceBaseUrl = sourceBaseUrl.split('/');
                            sourceBaseUrl = sourceBaseUrl[2];
                        }
                        mdContent = "--- \ntitle: " + '"' + item['subject'] + '"' + "\ncleanUrl: " + '"' + item[CONFIGURATION.cleanUrlField] + "" + '"' + "\n";
                        if (type !== 'events') {
                            mdContent = mdContent + "date: " + '"' + item['createdAt'] + "" + '"' + "\n";
                        }
                        mdContent = mdContent + "sourceBaseUrl: " + '"' + sourceBaseUrl + '"' + "\n";
                        if (item['startDate']) {
                            mdContent = mdContent + "date: " + item['startDate'] + "\n";
                            mdContent = mdContent + "eventdate: " + item['startDate'] + "\n";
                            mdContent = mdContent + "publishdate: " + item['createdAt'] + "\n";
                        }
                        if (item['dueDate']) {
                            mdContent = mdContent + "enddate: " + item['dueDate'] + "\n";
                        }
                        if (item[CONFIGURATION.locationField]) {
                            mdContent = mdContent + "location: " + '"' + item[CONFIGURATION.locationField] + '"' + "\n";
                        }
                        if (type === 'events') {
                            mdContent = mdContent + "layout: " + '"' + "event" + '"' + "\n";
                            mdContent = mdContent + "sub: " + '"' + "events" + '"' + "\n";
                        }
                        let attachMentUrl = item['_links']['attachments']['href'];
                        attachMentUrl = CONFIGURATION.baseUrl + attachMentUrl;
                        options.url = attachMentUrl;
                        await getRequest(options).then(async function (response) {
                            if (response['_embedded']['elements'].length > 0) {
                                const elements = response['_embedded']['elements'];
                                let mdFileName = item['subject'].replace(/[^a-z\d\s]+/gi, " ");
                                mdFileName = mdFileName.trim();
                                let featuredImageUrl = '';
                                let metaDataUrl = '';
                                let ogSiteName = '';
                                elements.some(function (attachment, index, _arr) {
                                    if (attachment['_links']['self']['title']) {
                                        if (attachment['_links']['self']['title'] === 'Curated_Featured_Image.png') {
                                            featuredImageUrl = attachment['_links']['self']['href'];
                                            featuredImageUrl = CONFIGURATION.baseUrl + featuredImageUrl + '/content';
                                        } else if (attachment['_links']['self']['title'] === 'Lectio_Extension_Curation.json') {
                                            metaDataUrl = attachment['_links']['self']['href'];
                                            metaDataUrl = CONFIGURATION.baseUrl + metaDataUrl + '/content';
                                        }
                                    }
                                });
                                if (featuredImageUrl !== '') {
                                    options.url = featuredImageUrl;
                                    options['encoding'] = 'binary';
                                    await getRequest(options, false).then(async function (responseData) {
                                        let fileName = item['subject'].replace(/[^a-z\d\s]+/gi, "");
                                        fileName = fileName.trim();
                                        fileName = fileName + '.png';
                                        imagePath = "/images/resources/" + fileName;
                                        mdContent = mdContent + "banner : " + '"' + imagePath + '"' + "\n";
                                        fs.writeFile("static/images/resources/" + fileName, responseData, 'binary', function (err) {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                console.log(fileName, "-image is saved!");
                                            }
                                        });
                                    });
                                } else {
                                    imagePath = "images/default.png";
                                    mdContent = mdContent + "banner: " + '"' + imagePath + '"' + "\n";
                                    fs.writeFile('content/' + type + '/' + mdFileName + '.md', mdContent, function (err) {
                                        if (err) { throw err } else {
                                            console.log(mdFileName, 'Saved successfully!');
                                        }
                                    });
                                }
                                if (metaDataUrl !== '') {
                                    options.url = metaDataUrl;
                                    await getRequest(options, false).then(async function (metaDataResponse) {
                                        metaDataResponse = JSON.parse(metaDataResponse);
                                        for (const meta of metaDataResponse) {
                                            if (meta['name'] === 'openGraphMetaData') {
                                                const openGraphMetaData = meta['content'];
                                                for (const openMeta of openGraphMetaData) {
                                                    openMeta['content'] = openMeta['content'].replace(/[^\x20-\x7E]/g, '');
                                                    if (openMeta['name'] === 'og:title') {
                                                        mdContent = mdContent + "ogTitle: " + '"' + openMeta['content'] + '"' + "\n";
                                                    } else if (openMeta['name'] === 'og:description') {
                                                        mdContent = mdContent + "ogDescription: " + '"' + openMeta['content'] + '"' + "\n";
                                                    } else if (openMeta['name'] === 'og:type') {
                                                        mdContent = mdContent + "ogType: " + '"' + openMeta['content'] + '"' + "\n";
                                                    } else if (openMeta['name'] === 'og:site_name') {
                                                        ogSiteName = openMeta['content'];
                                                        mdContent = mdContent + "ogSiteName: " + '"' + openMeta['content'] + '"' + "\n";
                                                    } else if (openMeta['name'] === 'og:image') {
                                                        mdContent = mdContent + "ogImage: " + '"' + openMeta['content'] + '"' + "\n";
                                                    }
                                                }
                                            }
                                            if (meta['name'] === 'twitterMetaData') {
                                                const twitterMetaData = meta['content'];
                                                for (const twitterMeta of twitterMetaData) {
                                                    twitterMeta['content'] = twitterMeta['content'].replace(/[^\x20-\x7E]/g, '');
                                                    if (twitterMeta['name'] === 'twitter:card') {
                                                        mdContent = mdContent + "twitterCard: " + '"' + twitterMeta['content'] + '"' + "\n";
                                                    } else if (twitterMeta['name'] === 'twitter:description') {
                                                        mdContent = mdContent + "twitterDescription: " + '"' + twitterMeta['content'] + '"' + "\n";
                                                    } else if (twitterMeta['name'] === 'twitter:title') {
                                                        mdContent = mdContent + "twitterTitle: " + '"' + twitterMeta['content'] + '"' + "\n";
                                                    } else if (twitterMeta['name'] === 'twitter:site') {
                                                        mdContent = mdContent + "twitterSite: " + '"' + twitterMeta['content'] + '"' + "\n";
                                                    } else if (twitterMeta['name'] === 'twitter:image') {
                                                        mdContent = mdContent + "twitterImage: " + '"' + twitterMeta['content'] + '"' + "\n";
                                                    } else if (twitterMeta['name'] === 'twitter:creator') {
                                                        mdContent = mdContent + "twitterCreator: " + '"' + twitterMeta['content'] + '"' + "\n";
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                                if (ogSiteName) {
                                    const siteName = ogSiteName.replace(/\s/g, '-');
                                    const sourcePath = '/' + type + '/source/' + siteName.toLowerCase();
                                    mdContent = mdContent + "breadcrumbs:\n - Home\n - " + type.charAt(0).toUpperCase() + type.slice(1) + "\n - " + ogSiteName + "\n - " + mdFileName + "\n";
                                    mdContent = mdContent + "breadcrumbLinks:\n - / \n - /" + type + "\n - " + sourcePath + "\n - / \n";
                                    mdContent = mdContent + "source: " + '"' + ogSiteName + '"' + "\n";
                                    mdContent = mdContent + type + "/source: " + '"' + ogSiteName + '"' + "\n";
                                } else {
                                    mdContent = mdContent + "breadcrumbs:\n - Home\n - " + type.charAt(0).toUpperCase() + type.slice(1) + "\n - " + mdFileName + "\n";
                                    mdContent = mdContent + "breadcrumbLinks:\n - / \n - /" + type + "\n - / \n";
                                }
                                mdContent = mdContent + "---\n" + item['description']['raw'] + "\n";
                                if (fs.existsSync('content/' + type + '/' + mdFileName + '.md')) {
                                    fs.unlink('content/' + type + '/' + mdFileName + '.md', (err) => {
                                        if (err) {
                                            console.error(err)
                                            return
                                        }
                                        fs.writeFile('content/' + type + '/' + mdFileName + '.md', mdContent, function (err) {
                                            if (err) { throw err } else {
                                                console.log(mdFileName, 'Saved successfully!');
                                            }
                                        });
                                    });
                                } else {
                                    fs.writeFile('content/' + type + '/' + mdFileName + '.md', mdContent, function (err) {
                                        if (err) { throw err } else {
                                            console.log(mdFileName, 'Saved successfully!');
                                        }
                                    });
                                }
                            }
                        });
                    }
                };
            }, function (err) {
                console.log(err);
            });
        }

        // totalLength = Number(totalLength) + 1;
    }, function (err) {
        console.log(err);
    })
}

const fetchNews = main(CONFIGURATION.newsProjectId, 'news');
fetchNews.then(function (newsResponse) {
    console.log('news completed..');
    const fetchEvents = main(CONFIGURATION.eventProjectId, 'events');
    fetchEvents.then(function (eventResponse) {
        console.log('events completed..');
        const fetchPress = main(CONFIGURATION.pressProjectId, 'press');
        fetchPress.then(function (pressResponse) {
            console.log('press completed..');
        });
    });
});