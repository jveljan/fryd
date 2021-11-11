import {Link, Dl, Dt, Dd} from "@dnb/eufemia";

export const NewsList = () => {
    let news = [
        {
            title: "News item 1",
            ingress: "Lorem ipsum dolor sit amet",
            link: "www.dn.no"
        },
        {
            title: "News item 2",
            ingress: "Lorem ipsum dolor sit amet",
            link: "www.dn.no"
        },
        {
            title: "News item 3",
            ingress: "Lorem ipsum dolor sit amet",
            link: "www.dn.no"
        },
        {
            title: "News item 4",
            ingress: "Lorem ipsum dolor sit amet",
            link: "www.dn.no"
        },
    ];

    return (
        <div>
            <Dl>
                {
                    news.map((newsItem, index) => {
                        let isLast = index === news.length - 1;
                        return (
                            <div style={{textAlign: 'left', marginBottom: !isLast ? '1rem' : ''}}>
                                <Dt>
                                    <span className="dnb-typo-bold">{newsItem.title}</span>
                                </Dt>
                                <Dd>
                                    <span>{newsItem.ingress}</span><br/>
                                    <span><Link href={newsItem.link}>Gå til</Link></span>
                                </Dd>

                            </div>
                        )
                    })
                }
            </Dl>
        </div>
    )
}