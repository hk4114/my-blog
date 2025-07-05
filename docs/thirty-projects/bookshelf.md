# 大模型效果评测：现在的AI能帮我的微信读书的书分组吗
> 更好的阅读体验：https://r1rn3kdhfy.feishu.cn/wiki/FWJUwCt01iKfHIkmMVvcnGyKnLb
> 
> 关键词：数据采集 智能体 提示词工程 书籍分组 大模型效果评测

答案：能，但是过程挺麻烦的。

起因是微信读书里的书很多（175本），但是分组的比较乱，时间久了就很难找到自己想看的书，软件提供的分组方案分类太细，而且需要来回切换，所以尝试利用AI来对书架上的书进行分组。

## 前置操作
把之前所有的分组删除，平铺在书架上，方便后续AI获取书籍信息。

## 在IMA中直接分组（失败）
在 ima 中输入 [微信读书](https://weread.qq.com/)，回车后就可以在 ima 中进入微信读书的页面。
打开书架后，点击右上方的“问问ima”，在右侧出现的界面里选择相应的大模型进行提问: 请帮我将书架中的书籍进行分组。

从返回的结果我们可以发现两个问题：
1. 我发现思考过程中分组是根据之前（我还没有把书籍移除分组）来分组的，而不是根据现在平铺的书籍。
2. 提示词过于简单，缺少分组维度，比如是根据评分、类型、读书进度、评分等，而这些在页面上是没有的，需要我们获取更多数据。
所以下一步我们需要获取详尽的书架信息。

## 获取书架信息

### 方案1：通过扣子空间上传图片（失败）


### 方案2：豆包上传图片（失败）

顺便让豆包对书籍进行分组
```json
{
    "医学类": [
        "药物简史",
        "生命的反转：急重症科医生手记",
        //...
    ],
    "经济类": [
        "增长黑客：创业公司的用户与收入…",
        "经济学原理（微观经济学分…）",
        //...
    ],
    "历史类": [
        "何以帝国：从财政视角再看中华史…",
        "全球化与国家竞争：新兴七国比…",
        //..
    ],
    "文学类": [
        "长安的荔枝（同名影视原著）",
        "新宋·大结局（全15册）",
        //..
    ],
    "科学与技术类": [
        "智能体设计指南：成为提示高手",
        "像火箭科学家一样思考：将不可能变为可能",
        //..
    ],
    "哲学与思想类": [
        "多维度思考：拥有“反套路”的思维…",
        "心智社会：我们的认识决定了我们…",
        //..
    ],
    "通识与科普类": [
        "这里是中国（地理人文科普）",
        "千面英雄（科普）",
        //..
    ]
}
```
存在几个问题：
1. 部分书名有省略号
2. 除了书名没有其他信息辅助我们进行分类，所以导致有些分组书单过长，通识与科普类有将近100本。
3. 存在书名重复的情况，大模型没有对结果进行检查。

### 方案3: 手动获取数据（成功）
通过检查代码和接口数据拼接成完整数据，举例：
```json
{
    "bookId": "26454163",
    "title": "这里是中国",
    "author": "星球研究所 中国青藏高原研究会",
    "cover": "https://cdn.weread.qq.com/weread/cover/95/YueWen_26454163/t6_YueWen_26454163.jpg",
    "version": 1092677849,
    "format": "epub",
    "type": 0,
    "price": 100.8,
    "originalPrice": 0,
    "soldout": 0,
    "bookStatus": 1,
    "payingStatus": 2,
    "payType": 1048577,
    "totalWords": 110029,
    "centPrice": 10080,
    "finished": 1,
    "maxFreeChapter": 9,
    "maxFreeInfo": {
      "maxFreeChapterIdx": 9,
      "maxFreeChapterUid": 90,
      "maxFreeChapterRatio": 40
    },
    "free": 0,
    "mcardDiscount": 0,
    "ispub": 1,
    "extra_type": 5,
    "lastChapterCreateTime": 1692943678,
    "publishTime": "2019-09-01 00:00:00",
    "category": "社会文化-文化",
    "categories": [
      {
        "categoryId": 900000,
        "subCategoryId": 900003,
        "categoryType": 0,
        "title": "社会文化-文化"
      }
    ],
    "hasLecture": 0,
    "lastChapterIdx": 28,
    "paperBook": {
      "skuId": "12703520"
    },
    "copyrightChapterUids": [
      58
    ],
    "blockSaveImg": 0,
    "language": "zh-wr",
    "isTraditionalChinese": false,
    "hideUpdateTime": false,
    "isEPUBComics": 0,
    "isVerticalLayout": 0,
    "isShowTTS": 1,
    "webBookControl": 0,
    "selfProduceIncentive": false,
    "isAutoDownload": 1,
    "newRating": 862,
    "newRatingCount": 18624,
    "newRatingDetail": {
      "good": 16138,
      "fair": 2309,
      "poor": 177,
      "recent": 49,
      "title": "好评如潮"
    },
    "secret": 0,
    "readUpdateTime": 1751458726,
    "finishReading": 0,
    "paid": 0,
    "updateTime": 1745476358,
  },
```


## 补充豆瓣评分
现在补全了完整的书籍信息，我想要得到更加完善的书籍评价，这样方便我之后多维度的进行分组。这就需要采集豆瓣的评分数据。

### 方案1：扣子空间（失败）
尝试直接使用Agent帮我获取，都失败了。然后我也尝试用豆包、元宝、kimi，都不能直接获取豆瓣评分。
所以只能通过写脚本的方式获取豆瓣书籍的评分数据。

### 方案2：AI 写脚本（半成功）

#### 第一次尝试
模型：通义灵码
提示词：使用NodeJS编写一个批量获取豆瓣书籍评分的脚本。

```js
const fs = require('fs').promises;
const axios = require('axios');
const cheerio = require('cheerio');

// 配置信息
const config = {
  inputFile: 'books.json',      // 输入的书籍列表文件
  outputFile: 'books_with_ratings.json', // 输出结果文件
  concurrentRequests: 3,        // 并发请求数量
  requestDelay: 2000,           // 请求间隔(毫秒)
  retryCount: 3,                // 失败重试次数
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
};

// 自定义 delay 函数
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 获取豆瓣书籍信息
async function fetchBookInfo(book) {
  let retries = 0;
  while (retries < config.retryCount) {
    try {
      // 等待指定时间，避免请求过于频繁
      await delay(config.requestDelay * (retries + 1));
      
      // 构建搜索URL (使用豆瓣书籍搜索专用URL)
      const searchUrl = `https://book.douban.com/subject_search?search_text=${encodeURIComponent(book.title)}&cat=1001`;
      
      // 发送HTTP请求
      const response = await axios.get(searchUrl, {
        headers: {
          'User-Agent': config.userAgent,
          'Referer': 'https://book.douban.com/',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
          'Connection': 'keep-alive'
        },
        timeout: 10000 // 设置超时时间
      });
      
      // 检查响应状态
      if (response.status !== 200) {
        throw new Error(`HTTP状态码: ${response.status}`);
      }
      
      // 解析HTML内容
      const $ = cheerio.load(response.data);
      
      // 查找搜索结果
      const searchResults = $('.item-root');
      if (searchResults.length === 0) {
        return {...book, rating: '未找到', url: '', error: '未找到匹配结果'};
      }
      
      // 找到最匹配的结果（优先匹配作者）
      let bestMatch = null;
      searchResults.each((index, element) => {
        const item = $(element);
        const title = item.find('a.title-text').text().trim();
        const info = item.find('.meta').text().trim();
        
        // 检查作者是否匹配（如果提供了作者信息）
        if (book.author && info.includes(book.author)) {
          bestMatch = item;
          return false; // 停止遍历
        }
        
        // 如果没有作者信息，使用第一个结果
        if (!bestMatch) {
          bestMatch = item;
        }
      });
      
      if (!bestMatch) {
        return {...book, rating: '未找到', url: '', error: '未找到匹配的书籍'};
      }
      
      // 获取书籍详情页URL
      const bookUrl = bestMatch.find('a.title-text').attr('href');
      if (!bookUrl) {
        return {...book, rating: '未找到', url: '', error: '无法获取书籍链接'};
      }
      
      console.log(`找到匹配书籍: ${book.title} - ${bookUrl}`);
      
      // 请求书籍详情页
      const bookResponse = await axios.get(bookUrl, {
        headers: {
          'User-Agent': config.userAgent,
          'Referer': searchUrl,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
          'Connection': 'keep-alive'
        },
        timeout: 15000 // 详情页请求超时设置长一些
      });
      
      // 检查响应状态
      if (bookResponse.status !== 200) {
        throw new Error(`书籍详情页HTTP状态码: ${bookResponse.status}`);
      }
      
      // 解析书籍详情页
      const book$ = cheerio.load(bookResponse.data);
      
      // 提取评分信息
      const ratingElement = book$('strong.rating_num');
      const rating = ratingElement.length ? ratingElement.text().trim() : '未评分';
      
      // 提取评价人数
      const votesElement = book$('div.rating_sum span[property="v:votes"]');
      const votes = votesElement.length ? votesElement.text().trim() : '0';
      
      return {...book, rating, votes, url: bookUrl, error: ''};
      
    } catch (error) {
      console.error(`获取《${book.title}》失败 (尝试 ${retries + 1}/${config.retryCount}):`, error.message);
      
      // 处理特定类型的错误
      if (error.code === 'ETIMEDOUT' || error.code === 'ECONNRESET') {
        console.log('请求超时，正在重试...');
      }
      
      retries++;
      
      // 如果达到最大重试次数
      if (retries === config.retryCount) {
        const errorMessage = error.response 
          ? `HTTP错误 ${error.response.status}` 
          : error.message;
        return {...book, rating: '获取失败', url: '', error: errorMessage};
      }
    }
  }
}

// 批量处理书籍
async function processBooks(books) {
  const results = [];
  
  // 分批处理书籍
  for (let i = 0; i < books.length; i += config.concurrentRequests) {
    const batch = books.slice(i, i + config.concurrentRequests);
    console.log(`正在处理第 ${i+1}-${Math.min(i+config.concurrentRequests, books.length)} 本书，共 ${books.length} 本`);
    
    // 并发处理当前批次
    const batchResults = await Promise.all(batch.map(book => fetchBookInfo(book)));
    results.push(...batchResults);
    
    // 保存当前结果
    await fs.writeFile(config.outputFile, JSON.stringify(results, null, 2), 'utf8');
    console.log(`已保存 ${results.length} 条记录到 ${config.outputFile}`);
  }
  
  return results;
}

// 主函数
async function main() {
  try {
    console.log('开始批量获取豆瓣书籍评分...');
    
    // 读取书籍列表
    const data = await fs.readFile(config.inputFile, 'utf8');
    const books = JSON.parse(data);
    
    console.log(`已读取 ${books.length} 本书籍信息`);
    
    if (books.length === 0) {
      console.log('书籍列表为空，程序退出');
      return;
    }
    
    // 处理书籍
    const results = await processBooks(books);
    
    console.log('全部处理完成！');
    console.log(`成功获取 ${results.filter(r => r.rating !== '获取失败' && r.rating !== '未找到').length} 本书的评分`);
    
  } catch (error) {
    console.error('程序运行出错:', error);
  }
}

// 执行主函数
main();    
```

#### 问题
方案过老，cheerio + 模拟请求头，无法通过豆瓣的反爬虫机制。

#### 第二次尝试
更新提示词让他使用 puppeteer 来获取数据，过程中需要不断调整提示词，最后生成的代码还是有点小问题，比如参数定义什么的，最后生成的结果。

```js
const fs = require('fs').promises;
const puppeteer = require('puppeteer');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 配置信息
const config = {
  inputFile: 'books.json',
  outputFile: 'books_with_ratings.json',
  concurrentRequests: 1,       // 并发浏览器实例数量
  pageDelay: 10000,             // 页面操作间隔(毫秒)
  retryCount: 3,               // 失败重试次数
  headless: false,             // 设为false便于观察调试
  slowMo: 100,                 // 减慢操作速度，帮助通过反爬检测
  userDataDir: './puppeteer_data', // 存储浏览器数据的目录
  waitUntil: 'networkidle2',   // 等待页面加载完成的条件
  maxPagesPerBrowser: 5,       // 每个浏览器实例处理的最大页面数
  searchTimeout: 20000,        // 搜索结果等待超时时间
  bookTimeout: 30000,          // 书籍页面等待超时时间
};

// 自定义 delay 函数
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 初始化浏览器
async function initBrowser() {
  console.log('正在启动浏览器...');
  
  const browser = await puppeteer.launch({
    headless: config.headless,
    slowMo: config.slowMo,
    args: [
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1366,768',
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ],
    userDataDir: config.userDataDir
  });
  
  console.log('浏览器已启动，将使用已有登录状态');
  return browser;
}

// 获取豆瓣书籍信息
async function fetchBookInfo(book, browser) {
  let retries = 0;
  let page = null;
  
  while (retries < config.retryCount) {
    try {
      // 创建新页面
      page = await browser.newPage();
      
      // 设置视口和用户代理
      await page.setViewport({ width: 1366, height: 768 });
      
      // 设置随机User-Agent
      const userAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4515.138 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4515.159 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36'
      ];
      const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
      await page.setUserAgent(randomUserAgent);
      
      // 导航到搜索页面
      const searchUrl = `https://book.douban.com/subject_search?search_text=${encodeURIComponent(book.title)}&cat=1001`;
      console.log(`正在搜索: ${book.title}`);
      
      // 访问搜索页面
      await page.goto(searchUrl, { waitUntil: config.waitUntil, timeout: 60000 });
      
      // 检查是否需要登录
      const needLogin = await page.evaluate(() => {
        return document.title.includes('登录') || 
               document.body.innerText.includes('登录使用豆瓣') ||
               document.body.innerText.includes('请登录');
      });
      
      if (needLogin) {
        console.log('检测到需要登录，请确保浏览器已手动登录');
        await page.close();
        throw new Error('需要登录');
      }
      
      // 等待搜索结果加载
      try {
        await page.waitForSelector('.item-root', { timeout: config.searchTimeout });
      } catch (error) {
        // 如果未找到标准结果，尝试查找其他可能的结果元素
        const alternativeResults = await page.$('.search-result');
        if (alternativeResults) {
          console.log('找到替代搜索结果区域');
        } else {
          console.log(`未找到《${book.title}》的搜索结果`);
          return {...book, rating: '未找到', url: '', error: '未找到匹配结果'};
        }
      }
      
      // 检查是否被反爬拦截
      const isBlocked = await page.evaluate(() => {
        return document.title.includes('豆瓣安全中心') || 
               document.body.innerText.includes('检测到有异常请求') ||
               document.body.innerText.includes('请输入验证码');
      });
      
      if (isBlocked) {
        throw new Error('触发反爬机制，需要验证码');
      }
      
      // 查找搜索结果
      const searchResults = await page.$$('.item-root');
      
      if (!searchResults || searchResults.length === 0) {
        // 尝试使用替代选择器
        const altResults = await page.$$('.subject-item');
        if (altResults && altResults.length > 0) {
          console.log('使用替代选择器找到结果');
          return await processAlternativeResults(altResults, book, page);
        }
        
        return {...book, rating: '未找到', url: '', error: '未找到匹配结果'};
      }
      
      // 找到最匹配的结果（优先匹配作者）
      let bestMatchIndex = -1;
      
      for (let i = 0; i < searchResults.length; i++) {
        const title = await searchResults[i].$eval('a.title-text', el => el.innerText.trim());
        const info = await searchResults[i].$eval('.meta', el => el.innerText.trim());
        
        // 打印当前搜索结果，便于调试
        console.log(`搜索结果 ${i+1}: ${title} - ${info}`);
        
        // 检查作者是否匹配（如果提供了作者信息）
        if (book.author && info.includes(book.author)) {
          console.log(`找到匹配作者: ${book.author}`);
          bestMatchIndex = i;
          break;
        }
        
        // 如果没有作者信息，使用第一个结果
        if (bestMatchIndex === -1) {
          bestMatchIndex = i;
        }
      }
      
      if (bestMatchIndex === -1) {
        return {...book, rating: '未找到', url: '', error: '未找到匹配的书籍'};
      }
      
      // 获取书籍详情页URL
      const bookUrl = await searchResults[bestMatchIndex].$eval('a.title-text', el => el.href);
      console.log(`找到匹配书籍: ${book.title} - ${bookUrl}`);
      
      // 访问书籍详情页
      await page.goto(bookUrl, { waitUntil: config.waitUntil, timeout: config.bookTimeout });
      
      // 检查是否需要登录
      const needLoginOnBookPage = await page.evaluate(() => {
        return document.title.includes('登录') || 
               document.body.innerText.includes('登录使用豆瓣') ||
               document.body.innerText.includes('请登录');
      });
      
      if (needLoginOnBookPage) {
        console.log('书籍详情页需要登录，请确保浏览器已手动登录');
        await page.close();
        throw new Error('需要登录');
      }
      
      // 检查是否被反爬拦截
      const isBookPageBlocked = await page.evaluate(() => {
        return document.title.includes('豆瓣安全中心') || 
               document.body.innerText.includes('检测到有异常请求') ||
               document.body.innerText.includes('请输入验证码');
      });
      
      if (isBookPageBlocked) {
        throw new Error('触发反爬机制，需要验证码');
      }
      
      // 等待评分元素加载
      await page.waitForSelector('strong.rating_num', { timeout: 10000 }).catch(() => {
        console.log('未找到评分元素，可能页面结构已变化');
      });
      
      // 提取评分信息
      const rating = await page.$eval('strong.rating_num', el => el.innerText.trim())
        .catch(() => '未评分');
      
      // 提取评价人数
      const votes = await page.$eval('div.rating_sum span[property="v:votes"]', el => el.innerText.trim())
        .catch(() => '0');
      
      return {...book, rating, votes, url: bookUrl, error: ''};
      
    } catch (error) {
      console.error(`获取《${book.title}》失败 (尝试 ${retries + 1}/${config.retryCount}):`, error.message);
      
      retries++;
      
      // 如果达到最大重试次数
      if (retries === config.retryCount) {
        return {...book, rating: '获取失败', url: '', error: error.message};
      }
      
    } finally {
      // 关闭页面
      if (page) {
        await page.close();
      }
      
      // 随机延迟，模拟人类行为
      await delay(config.pageDelay + Math.random() * 10000);
    }
  }
}

// 处理替代搜索结果
async function processAlternativeResults(results, book, page) {
  let bestMatchIndex = -1;
  
  for (let i = 0; i < results.length; i++) {
    const title = await results[i].$eval('h2 a', el => el.innerText.trim().replace(/\s+/g, ' '));
    const info = await results[i].$eval('.pub', el => el.innerText.trim());
    
    console.log(`替代搜索结果 ${i+1}: ${title} - ${info}`);
    
    // 检查作者是否匹配（如果提供了作者信息）
    if (book.author && info.includes(book.author)) {
      console.log(`替代结果中找到匹配作者: ${book.author}`);
      bestMatchIndex = i;
      break;
    }
    
    // 如果没有作者信息，使用第一个结果
    if (bestMatchIndex === -1) {
      bestMatchIndex = i;
    }
  }
  
  if (bestMatchIndex === -1) {
    return {...book, rating: '未找到', url: '', error: '未找到匹配的书籍'};
  }
  
  // 获取书籍详情页URL
  const bookUrl = await results[bestMatchIndex].$eval('h2 a', el => el.href);
  console.log(`替代结果中找到匹配书籍: ${book.title} - ${bookUrl}`);
  
  // 访问书籍详情页获取评分
  await page.goto(bookUrl, { waitUntil: config.waitUntil, timeout: config.bookTimeout });
  
  // 提取评分信息
  const rating = await page.$eval('strong.rating_num', el => el.innerText.trim())
    .catch(() => '未评分');
  
  // 提取评价人数
  const votes = await page.$eval('div.rating_sum span[property="v:votes"]', el => el.innerText.trim())
    .catch(() => '0');
  
  return {...book, rating, votes, url: bookUrl, error: ''};
}

// 批量处理书籍
async function processBooks(books) {
  const results = [];
  let browser = null;
  
  try {
    // 创建浏览器实例
    browser = await initBrowser();
    
    // 处理每本书
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      console.log(`\n正在处理第 ${i+1}/${books.length} 本书: ${book.title}`);
      
      // 获取书籍信息
      const result = await fetchBookInfo(book, browser);
      results.push(result);
      
      // 保存当前结果
      await fs.writeFile(config.outputFile, JSON.stringify(results, null, 2), 'utf8');
      console.log(`已保存 ${results.length} 条记录到 ${config.outputFile}`);
      
      // 随机延迟，模拟人类浏览行为
      await delay(config.pageDelay + Math.random() * 10000);
    }
    
  } catch (error) {
    console.error('处理过程中发生错误:', error);
  } finally {
    // 关闭浏览器
    if (browser) {
      console.log('关闭浏览器...');
      await browser.close();
    }
  }
  
  return results;
}

// 主函数
async function main() {
  try {
    console.log('开始批量获取豆瓣书籍评分...');
    
    // 读取书籍列表
    const data = await fs.readFile(config.inputFile, 'utf8');
    const books = JSON.parse(data);
    
    console.log(`已读取 ${books.length} 本书籍信息`);
    
    if (books.length === 0) {
      console.log('书籍列表为空，程序退出');
      return;
    }
    
    // 处理书籍
    const results = await processBooks(books);
    
    console.log('全部处理完成！');
    console.log(`成功获取 ${results.filter(r => r.rating !== '获取失败' && r.rating !== '未找到').length} 本书的评分`);
    
  } catch (error) {
    console.error('程序运行出错:', error);
  }
}

// 执行主函数
main();    
```
通过对脚本的微调，我意识到这次提示词写得不好，原因：
1. 没把他当作是一个工程化的项目，别看是个小脚本，依旧需要对具体任务进行拆解，细粒度到功能函数，一个函数做一件事情
2. 没有做好版本管理。
3. 太过纠结，一个地方出错，就把整个脚本看一遍，其实如果一个函数出了问题就让AI直接重新生成，不要花太多时间改。

最后还有个最愚蠢的问题：**我为什么不用py的技术栈来获取数据？技术更加成熟，更方便。**

## 字段解析
整个JSON太长了，所以需要把对于我们分组无关的字段删除，压缩长度。
```md
这是我从微信读书书架上获取的数据，请你根据提供的数据，对字段进行分析，比如：

title - 标题
author - 作者
doubanRating - 豆瓣评分

要求：输出为 markdown 格式
```
通过分析这些字段含义，里面的数组项目仅保留字段：
- title\author\doubanRating\category\newRating\newRatingCount\finishReading\newRatingDetail
- newRatingDetail 改为取值 newRatingDetail.title
这一块可以直接使用通义灵码或者Cursor生成对应脚本。

## 初步尝试AI分组
首先我需要明确我的需求，然后我给出了我的第一版提示词，尝试各类AI平台。

```md
这是我微信读书中书架上的书籍信息，其中
- title 是书名
- author 是作者
- doubanRating 是豆瓣评分
- category 是书籍分类
- newRating 是微信读书的评分
- newRatingCount 是微信读书的评分人数
- newRatingDetail 是书籍好评信息，从高到低是 神作>神作潜力>好评如潮>脍炙人口>值得一读>褒贬不一，还有评分不足和没有值，是因为看得人不多。
- finishReading 是我是否读完的状态，1是读完，0是未读完

现在请帮我分组，分组条件：
1. finishReading 和 newRatingDetail 非常重要，finishReading 为 1，且 newRatingDetail 为神作潜力的，可以单独分一组，因为这些书可以重复阅读，小说除外。
2. doubanRating、newRating、newRatingCount、newRatingDetail 为参考条件1
3. category 为参考条件2
4. 结合两个参考条件，综合之后给出权重。

结合条件，给出分组方案。

要求：
1. 给出一个分组方案的同时，给出你的判断权重。
2. 再生成另一个分组方案，给出你的判断权重。
3. 比较两个方案，给出两者优缺点，和你的推荐。
```
各个AI应用的评分以及结果：
- 扣子空间 4分 https://space.coze.cn/s/0VO5xBhPg3Q/
- 豆包 3.5分 https://www.doubao.com/thread/w0535a1bbc324534c
- 元宝 DS 
  - r1 3分 https://yuanbao.tencent.com/bot/app/share/chat/1tuYslYDQeZb
  - t1 2分 https://yuanbao.tencent.com/bot/app/share/chat/4lF70zM1bRUW
- chatGPT 3分 https://chatgpt.com/share/68689329-e9dc-8012-80d4-ec94f5d9a229
- Qwen3 235B 2分 https://chat.qwen.ai/s/4a638ecf-c9dc-49bf-bec8-c26b60a50a3a?fev=0.0.128 
- Grok 2分 https://x.com/i/grok/share/nByLhbFS1FWvGNJ9jhzJpcrCI
- Kimi 失败 0分 写到一半就空白了，我也感觉莫名其妙

从结果上来看，我发现Agent生成的效果会好一些，所以后续将使用Agent进行测试。

## 优化提示词提升效果
通过各个推理模型的思考逻辑，得出自己偏好的微信分组方案，我的是：

- 提示词版本2 步骤1
```md
请你作为专业的书架分配专家，帮我进行书单分组
这是我微信读书中书架上的书籍信息，其中
- title 是书名
- author 是作者
- doubanRating 是豆瓣评分
- category 是书籍分类
- newRating 是微信读书的评分
- newRatingCount 是微信读书的评分人数
- newRatingDetail 是书籍好评信息，从高到低是 神作>神作潜力>好评如潮>脍炙人口>值得一读>褒贬不一，还有评分不足和没有值，是因为看得人不多。
- finishReading 是我是否读完的状态，1是读完，0是未读完

按照以下方式进行分组：
1. 通读其他书单所有书籍，自己整理一个类目，可以根据已提供的category作为参考，这一步需要你深入思考。
2. 明确将 已读且好评信息为 神作或者神作潜力的书籍分为一组，文学、小说类除外
3. 根据整理的类目将175本书进行初步分组。
4. 检查是否有书籍遗漏

要求：
1. 给出两个方案并进行比较，声明两者优缺点，和你的推荐理由。
```
- 提示词版本2 步骤2
```md
采用方案一
1. 在已有分组的基础上进行二次分组，每组再分成两组，一组为好评，一组为普通。这一步需要你独自思考，以下过程可以作为参考：
  1. 结合 doubanRating、newRating、newRatingCount、newRatingDetail，给出权重
  2. 然后进行计算
  3. 最后进行分组
2. 检查是否有书籍遗漏，没有被分组。

要求：
1. 权重配比给出两个方案，并进行比较，声明两者优缺点，和你的推荐理由。
2. 分组结果的输出格式为json。
```
### o3 pro 评分 4


### Claude 4 opus 评分 5
就个人而言，满足了我目前的分组要求。

第一个步骤的回答：
```md
我来帮您设计两个书架分组方案。首先让我仔细分析您的175本书籍。
Ran tool

根据您的书籍数据，我先梳理了所有已读完且评价为"神作"或"神作潜力"的非文学小说类书籍：

**核心精读书单（已读神作/神作潜力，非文学小说类）：**
1. 置身事内：中国政府与经济发展 - 经济理财-财经 - 神作
2. 心理抚养 - 心理-发展心理学 - 神作  
3. 生命的反转：急重症科医生手记 - 医学健康-医学 - 神作
4. 金钱博弈 - 经济理财-财经 - 神作

基于对您175本书籍的深入分析，我设计了两个不同的分组方案：

## 方案一：知识体系导向分组（12个大类）

### 1. 核心精读书单（4本）
已读完且评价为神作的非文学小说类书籍

### 2. 经济财商类（45本）
- 财经理论（19本）：置身事内、一本书读懂财报、投资中最简单的事等
- 理财投资（8本）：富爸爸穷爸爸、纳瓦尔宝典、期货多空逻辑等
- 管理创新（14本）：原则、重来系列、华为数字化转型之道等
- 商业实践（4本）：参与感、芒格之道、SaaS创业路线图等

### 3. 文学艺术类（26本）
- 经典文学（10本）：鲁迅全集、基督山伯爵、鼠疫等
- 文学鉴赏（5本）：雪花写作法、我书架上的神明、小说课等
- 摄影艺术（6本）：新摄影笔记、手机摄影系列等
- 散文随笔（5本）：幸得诸君慰平生、命悬一线我不放手等

### 4. 历史文化类（17本）
- 历史研究（8本）：中国历史通论、潜规则、血酬定律等
- 历史小说（4本）：太白金星有点烦、长安的荔枝、食南之徒等
- 社会文化（5本）：工作消费主义和新穷人、精英的傲慢等

### 5. 思维成长类（24本）
- 认知思维（7本）：思考快与慢、认知天性、清醒思考的艺术等
- 职场技能（6本）：结构思考力、麦肯锡教我的思考武器等
- 人生哲学（5本）：反脆弱、斯坦福大学人生设计课等
- 心理学（6本）：非暴力沟通、金钱心理学、亲密关系等

### 6. 哲学思辨类（11本）
- 西方哲学（4本）：西方哲学史讲演录、当代政治哲学等
- 逻辑学（3本）：写给中学生的逻辑学、一本小小的蓝色逻辑书等
- 哲学读物（3本）：哲学家们都干了些什么、哲学起步等
- 宗教（1本）：千面英雄

### 7. 科学技术类（20本）
- 自然科学（7本）：微积分的力量、普林斯顿微积分读本、什么是科学等
- 科学科普（4本）：科学的历程、深奥的简洁、细胞传等
- 计算机技术（8本）：图解HTTP、数据结构与算法图解、精益数据方法论等
- 工业技术（1本）：汽车为什么会跑

### 8. 医学健康类（14本）
- 专业医学（9本）：实用内科学、内科疾病鉴别诊断学、生命的反转等
- 健康养生（5本）：肠子的小心思、只有男科医生知道、菌群大脑等

### 9. 小说故事类（25本）
- 科幻小说（8本）：赡养人类、你一生的故事、与罗摩相会等
- 网络小说（6本）：诡秘之主、黎明之剑、异常生物见闻录等
- 社会小说（4本）：医学生、新宋大结局、白色巨塔等
- 其他小说（7本）：我的团长我的团、抱歉我动了你的脑子等

### 10. 法律政治类（6本）
- 法律（3本）：民法典与日常生活、离婚律师都知道、心理突破
- 政治（3本）：可能性的艺术、中国官僚政治研究、战争论

### 11. 教育学习类（3本）
小狗钱钱、如何阅读一本书、曼昆经济学原理

### 12. 其他类（4本）
The Elements of Style、锻炼、御伽草纸、天之下

## 方案二：阅读场景导向分组（8个大类）

### 1. 核心精读书单（4本）
同方案一

### 2. 深度思考类（47本）
需要专注阅读和深入思考的书籍
- 经济财经理论（15本）：债务危机、全球化与国家竞争、以利为利等
- 哲学思辨（11本）：西方哲学史讲演录、哲学家们都干了些什么等
- 社会洞察（8本）：工作消费主义和新穷人、制造消费者等
- 历史反思（8本）：潜规则、血酬定律、何以帝国等
- 科学思维（5本）：什么是科学、技术与文明等

### 3. 实用技能类（38本）
可直接应用于工作生活的书籍
- 职场管理（16本）：原则、重来系列、清教徒的礼物等
- 投资理财（8本）：富爸爸穷爸爸、投资中最简单的事等
- 思维方法（8本）：学会提问、金字塔原理、结构思考力等
- 沟通表达（6本）：非暴力沟通、亲密关系、说话的逻辑等

### 4. 知识拓展类（32本）
扩展视野和知识面的书籍
- 科普读物（9本）：肠子的小心思、病者生存、科学无尽的前沿等
- 医学健康（8本）：癌症真相、抗生素的故事、药物简史等
- 数理基础（5本）：微积分的力量、普林斯顿微积分读本等
- 技术入门（6本）：计算机是怎样跑起来的、图解HTTP等
- 法律常识（4本）：民法典与日常生活、离婚律师都知道等

### 5. 文学享受类（20本）
纯文学欣赏类书籍
- 经典名著（8本）：鲁迅全集、基督山伯爵、白色巨塔等
- 文学评论（5本）：小说课、雪花写作法、我书架上的神明等
- 散文随笔（4本）：幸得诸君慰平生、命悬一线我不放手等
- 诗词古典（3本）：诗经、三言二拍、中国古代文学史

### 6. 轻松故事类（26本）
休闲娱乐的小说类书籍
- 科幻想象（8本）：三体系列作品、你一生的故事等
- 网文爽文（6本）：诡秘之主、黎明之剑、异常生物见闻录等
- 历史演义（5本）：太白金星有点烦、长安的荔枝、食南之徒等
- 社会故事（7本）：医学生、新宋大结局、抱歉我动了你的脑子等

### 7. 专业参考类（10本）
工具书和专业参考书
- 医学专业（5本）：实用内科学、实用外科学、内科疾病鉴别诊断学等
- 摄影技术（5本）：新摄影笔记、数码摄影后期高手之路等

### 8. 待评估类（3本）
评分不足或存在争议的书籍
- 企业产品化创新之路（评分不足）
- 博弈论（褒贬不一）
- 基本演绎法（评分较低）

## 两个方案的比较

### 方案一优势：
- ✅ 知识体系完整，便于系统学习
- ✅ 学科分类清晰，查找方便
- ✅ 适合建立知识框架
- ✅ 同类书籍集中，便于比较阅读

### 方案一劣势：
- ❌ 分类较多（12类），管理复杂
- ❌ 部分类别书籍较少，显得零散
- ❌ 不够贴合实际阅读场景

### 方案二优势：
- ✅ 贴合阅读场景，实用性强
- ✅ 分类精简（8类），易于管理
- ✅ 根据阅读目的分组，选书效率高
- ✅ 区分深度阅读和轻松阅读

### 方案二劣势：
- ❌ 学科界限模糊，系统性较弱
- ❌ 同一学科书籍可能分散在不同类别
- ❌ 对于专业学习者不够友好

## 我的推荐

**推荐采用方案二（阅读场景导向分组）**，理由如下：

1. **更贴合实际使用**：根据您的阅读历史，您涉猎广泛但并非专业研究者，场景导向分组更符合日常选书需求。

2. **管理更简单**：8个大类比12个更容易维护和记忆，减少选择困难。

3. **突出重点**：将已读神作单独列出，形成核心书单，便于回顾和推荐他人。

4. **灵活性更强**：可根据不同时间、心情和需求快速定位合适的书籍。

5. **平衡深度与广度**：既照顾到深度学习需求（深度思考类），又满足休闲阅读（轻松故事类）。

如果您是某个特定领域的深度学习者，可以考虑方案一；但从您的书单多样性来看，方案二会更实用。您觉得哪个方案更符合您的需求呢？
```

第二个步骤的回答
```md
我来为您设计两个权重方案，并对方案二的8个大类进行二次分组。

## 权重方案设计

### 方案A：专业评价导向
**权重分配：**
- 豆瓣评分（doubanRating）：35%
- 微信读书评分（newRating）：25%
- 评分人数（newRatingCount）：20%
- 好评等级（newRatingDetail）：20%

**评分标准化规则：**
- doubanRating：直接使用（0-10分），"未评分"按5.0，"评分不足"按6.0
- newRating：除以100转换为0-10分
- newRatingCount：log10(count+1)/5，上限为10分
- newRatingDetail：神作=10，神作潜力=9，好评如潮=8，脍炙人口=7，值得一读=6，褒贬不一=4，评分不足=3，空值=5

### 方案B：大众口碑导向
**权重分配：**
- 豆瓣评分（doubanRating）：20%
- 微信读书评分（newRating）：30%
- 评分人数（newRatingCount）：30%
- 好评等级（newRatingDetail）：20%

**评分标准化规则：**
同方案A

## 两个权重方案比较

### 方案A优势：
- ✅ 重视专业评价，筛选出真正的经典好书
- ✅ 豆瓣评分权重高，避免营销书籍干扰
- ✅ 平衡考虑各项指标

### 方案A劣势：
- ❌ 可能错过一些新书佳作（豆瓣评分滞后）
- ❌ 对小众好书不够友好

### 方案B优势：
- ✅ 重视读者实际体验和市场反馈
- ✅ 评分人数权重高，反映真实受欢迎程度
- ✅ 对新书和热门书更友好

### 方案B劣势：
- ❌ 可能受营销影响，将热门书误判为好书
- ❌ 对经典冷门书不够重视

## 我的推荐

**推荐采用方案A（专业评价导向）**，理由如下：
1. 您的书单质量较高，需要更专业的评价体系
2. 豆瓣评分经过时间检验，更能反映书籍真实价值
3. 避免将"热门"误判为"优质"
4. 对于已经筛选过的书单，专业评价更有参考价值

以下是基于方案A的分组结果：

完成！我已经成功为您创建了基于方案二（阅读场景导向）和权重方案A（专业评价导向）的书籍分组结果。

## 分组结果总结：

### 1. **核心精读书单（4本）**
   - 都是您已读完且评价为"神作"的非文学小说类书籍
   - 包括：置身事内、心理抚养、生命的反转、金钱博弈

### 2. **深度思考类（48本）**
   - 好评组29本，普通组19本
   - 涵盖哲学、经济理论、历史反思等需要深度思考的书籍

### 3. **实用技能类（43本）**
   - 好评组16本，普通组27本
   - 包括管理、理财、思维方法、沟通技巧等实用书籍

### 4. **知识拓展类（34本）**
   - 好评组21本，普通组13本
   - 医学健康、科普、技术入门、法律常识等扩展知识面的书籍

### 5. **文学享受类（21本）**
   - 好评组14本，普通组3本
   - 经典文学、文学评论、散文随笔等纯文学欣赏类书籍

### 6. **轻松故事类（26本）**
   - 好评组17本，普通组2本
   - 科幻、网文、历史小说等休闲娱乐类小说

### 7. **专业参考类（10本）**
   - 好评组2本，普通组5本
   - 医学和摄影相关的工具书和专业参考书

### 8. **待评估类（3本）**
   - 全部为普通组
   - 评分不足或存在争议的书籍

## 统计数据：
- **总计：175本书籍**
- **好评书籍：99本（56.6%）**
- **普通书籍：76本（43.4%）**

## 权重方案说明：
采用的权重方案A（专业评价导向）：
- 豆瓣评分：35%
- 微信读书评分：25%
- 评分人数：20%
- 好评等级：20%

综合评分阈值设定为7.5分，高于此分数的书籍进入好评组，低于此分数的进入普通组。

所有175本书籍已完成分组，无遗漏。分组结果已保存在`grouped_books_final.json`文件中。
```
### 扣子空间 评分 3
https://space.coze.cn/s/09pgQgwT0pk/

### Manus 评分 3 
https://manus.im/share/OAe7JapHYPuXfplQFjYhCO?replay=1

## 收获
首先收获了结果。得到了自己满意的书籍分组。不过分的过程中微调了下，还有就是微信读书能不能开放接口让分组自动化？手动分组真的很累！
其次我也意识到提示词对代码编辑出来的效果影响很大，一定要工程化结构化得去编写提示词；做好版本管理；别纠结，如果生成效果不好直接存一个版本，让AI重新生成，直到生成可用的。
最后我也测试了各个AI应用，大致掌握了"对于复杂任务可以使用Agent"这句话里，复杂是什么意思了 /doge。
在给书籍分组的过程中，我发现其实对书的评价是有权重的，比如已经读完的人、朋友的评价权重就应该高一点，没读完或者阅读时间过短或者过长的人权重就低些，这样才能得到对我而言比较中肯的分数。
话说回来，书还是用来看的，能快速找到自己以前读过的书是让人开心的事，能让人回想起读到那本书时的心情。

## 后续规划
考虑是否需要把这个流程做成自动化，其中获取书架信息可以通过编写JS脚本完成这个任务。
但也存在问题，就是补充豆瓣评分这一步存在难度，目前有两个解决方案：
1. 已经存在的豆瓣读书的数据库，进行匹配获取豆瓣评分
2. 使用第三方工具或者PY重写的方式获取数据
或者极端一点放弃补充豆瓣评分，这让我感到非常纠结，读者老爷如果有什么建议也可以一起探讨。


