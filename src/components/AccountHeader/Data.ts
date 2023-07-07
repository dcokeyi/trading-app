export interface LinksProps {
    links: [
        {
            id: string,
            title: string
        }
    ]   
}

export const links = [
    {
        id: "1",
        title: "Overview"
    },
    {
        id: "2",
        title: "Holdings"
    },
    {
        id: "3",
        title: "Orders"
    },
    {
        id: "4",
        title: "Activity"
    }
]

export const buttons = [
    {
        id: "1",
        title: "Transfer",
        className: ""
    },
    {
        id: "2",
        title: "Trade",
        className: ""
    },
    {
        id: "3",
        title: "Refresh",
        className: ""
    },
]