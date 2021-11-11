import {Link, Dl, Dt, Dd, H2, Tabs} from "@dnb/eufemia";

export const NewsList = () => {
    let news = [
        {
            title: "Surprise U.S.-China Climate Deal Breaks Through Superpower Standoff",
            ingress: "It was a bilateral deal between the two countries that paved the way for the landmark Paris Agreement",
            link: "https://www.bloomberg.com/news/articles/2021-11-10/china-says-reached-consensus-with-u-s-on-climate-issues?srnd=premium-europe"
        },
        {
            title: "Inflation Shock Tears Up Trader Playbooks From Stocks to Bitcoin",
            ingress: "The latest surge in U.S. consumer prices is the strongest blow yet to views inflation is transitory, sharpening the",
            link: "https://www.bloomberg.com/news/articles/2021-11-11/inflation-shock-tears-up-trader-playbooks-from-stocks-to-bitcoin?srnd=premium-europe"
        },
        {
            title: "All ECB Bond Purchases Could End Next Fall, Holzmann Says",
            ingress: "The European Central Bank could stop buying bonds as early as next September if inflation looks to have sustainably",
            link: "https://www.bloomberg.com/news/articles/2021-11-10/all-ecb-bond-purchases-could-end-next-fall-holzmann-says?srnd=premium-europe"
        },
        {
            title: "Elon Musk Sells Around $5 Billion in Tesla Stock",
            ingress: "The Tesla CEO sold around 4.5 million shares in total over the three days, shrinking the size of his stockholdings in the company even after exercising stock options.",
            link: "https://www.wsj.com/articles/elon-musk-sells-1-1-billion-in-tesla-stock-11636589559?mod=business_lead_pos1"
        },
    ];

    const getNews = (startIndex, endIndex) => {
        return (
            <Dl>
                {
                    news.map((newsItem, index) => {
                        if (index >= startIndex && index <= endIndex) {
                            let isLast = index === news.length - 1;
                            return (
                                <div style={{textAlign: 'left', marginBottom: !isLast ? '1.5rem' : ''}}>
                                    <Dt>
                                        <span className="dnb-typo-bold">{newsItem.title}</span>
                                    </Dt>
                                    <Dd style={{
                                        marginLeft: '0',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical'
                                    }}>
                                        {newsItem.ingress}
                                    </Dd>
                                    <span><Link href={newsItem.link}>Read more</Link></span>
                                </div>
                            )
                        }
                    })
                }
            </Dl>
        )
    }

    return (
        <div>
            <Tabs
                data={{
                    first: {
                        title: 'DNB News',
                        // See Example Content below
                        content: getNews(0, 1)
                    },
                    second: {
                        title: 'Some other source',
                        // See Example Content below
                        content: getNews(2, 3)
                    }
                }}
            />
        </div>
    )
}