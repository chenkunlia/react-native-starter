const zhihu = 'https://news-at.zhihu.com';
const douban = 'https://api.douban.com';

export default Service = {
	// 日报列表
	daily: zhihu + '/api/4/news/latest',
	// 日报详情
	dailyDetail: zhihu + '/api/4/news',
	// 即将上映
	comingSoon: douban + '/v2/movie/coming_soon',
	// 正在热映
	inTheater: douban + '/v2/movie/in_theaters',
	// 电影条目
	movieItem: douban + '/v2/movie/subject',
	// 电影搜索
	movieSearch: douban + '/v2/movie/search'
}