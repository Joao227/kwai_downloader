const axios = require("axios");
const cheerio = require("cheerio")

exports.kwaiDownloader = async (url) => {

    const response = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
        }
    });

    if (response.status !== 200) {
        throw new Error(`Erro na requisição: Status ${response.status}`);
    }

    const $ = cheerio.load(response.data);

    const videoUrl = $("#main .video-content .video-box #video-0").attr("src");

    const title = $("#main .author-info .author-desc span span").html().trim() || "";

    const authorName = $("#main .author-info .author-name .name-detail").text().trim() || "";

    const numbersComments = $("#main .video-action .common .number").eq(1).html().trim() || "";

    const numbersShare = $("#main .video-action .common .number").eq(2).html().trim() || "";

    const numbersLike = $("#main .video-action .common .number").eq(0).html().trim() || "";

    if (!videoUrl.length) {
        throw new Error("Video não contrado, verifique a url!");
    }

    return {
        authorName: authorName,
        description: title,
        numbersComments: numbersComments,
        numbersShare: numbersShare,
        numbersLike: numbersLike,
        videoUrl: videoUrl
    }

};
