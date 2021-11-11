import { Link, Dl, Dt, Dd, H2, Tabs } from "@dnb/eufemia";

export const NewsList = () => {
  let news = [
    {
      title: "DNB Morning report 11.11.21",
      ingress:
        "Med fokus på KPI-tall som kom inn høyere enn ventet og dermed ga uro for raksere renteoppjusteringer falt det amerikanske aksjemarkedet i går videre etter tirsdagens svake utvikling. Lavere oljepris bidro til å forsterke fallet. Med fokus på KPI-tall som kom inn høyere enn ventet og dermed ga uro for raksere renteoppjusteringer falt det amerikanske aksjemarkedet i går videre etter tirsdagens svake utvikling. Lavere oljepris bidro til å forsterke fallet.",
      link: "https://www.bloomberg.com/news/articles/2021-11-10/china-says-reached-consensus-with-u-s-on-climate-issues?srnd=premium-europe",
    },
    {
      title: "DNB Morning report 10.11.21",
      ingress:
        "The latest surge in U.S. consumer prices is the strongest blow yet to views inflation is transitory, sharpening the things. The latest surge in U.S. consumer prices is the strongest blow yet to views inflation is transitory, sharpening the things.",
      link: "https://www.bloomberg.com/news/articles/2021-11-11/inflation-shock-tears-up-trader-playbooks-from-stocks-to-bitcoin?srnd=premium-europe",
    },
    {
      title: "Daily Macro Brief 11.11.21",
      ingress:
        "Norwegian core inflation fell by 0.3%-points in October, to 0.9% YOY. Norges Bank remains in a different position than the Fed and the Bank of England, asit is not facing domestic inflation woes.",
      link: "https://www.bloomberg.com/news/articles/2021-11-10/all-ecb-bond-purchases-could-end-next-fall-holzmann-says?srnd=premium-europe",
    },
    {
      title: "Daily Macro Brief 10.11.21",
      ingress:
        "US inflation was significantly higher than consensus in October. Core CPI inflation, which excludes food and energy prices, jumped by 0.6%-points, to 4.6% YOY. Headline inflation rose by 0.8%-points to 6.2% YOY, the highest level since 1990.",
      link: "https://www.wsj.com/articles/elon-musk-sells-1-1-billion-in-tesla-stock-11636589559?mod=business_lead_pos1",
    },
    {
      title: "Weekly Calendar 7-12 November",
      ingress:
        "Inflation, amended Norwegian budget proposal and something else. Market turnaround for the global score something something. ECB, inflation- and GDP-data. Chinese GDP, UK Inflation, flash PMIs. Yada yada yada.",
      link: "https://www.wsj.com/articles/elon-musk-sells-1-1-billion-in-tesla-stock-11636589559?mod=business_lead_pos1",
    },
    {
      title: "Weekly Calendar 1-5 November",
      ingress:
        "Market turnaround for the global score something something. ECB, inflation- and GDP-data. Chinese GDP, UK Inflation, flash PMIs. Yada yada yada.",
      link: "https://www.wsj.com/articles/elon-musk-sells-1-1-billion-in-tesla-stock-11636589559?mod=business_lead_pos1",
    },
  ];

  const getNews = (startIndex, endIndex) => {
    return (
      <Dl>
        {news.map((newsItem, index) => {
          if (index >= startIndex && index <= endIndex) {
            let isLast = index === news.length - 1;
            return (
              <div
                style={{
                  textAlign: "left",
                  marginBottom: !isLast ? "1.5rem" : "",
                }}
              >
                <Dt>
                  <span className="dnb-typo-bold">{newsItem.title}</span>
                </Dt>
                <Dd
                  style={{
                    marginLeft: "0",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {newsItem.ingress}
                </Dd>
                <span>
                  <Link href={newsItem.link}>Read more</Link>
                </span>
              </div>
            );
          }
        })}
      </Dl>
    );
  };

  return (
    <div>
      <Tabs
        data={{
          first: {
            title: "Morning Report",
            // See Example Content below
            content: getNews(0, 1),
          },
          second: {
            title: "Macro news",
            // See Example Content below
            content: getNews(2, 3),
          },
          third: {
            title: "DNB Alpha",
            // See Example Content below
            content: getNews(4, 5),
          },
        }}
      />
    </div>
  );
};
