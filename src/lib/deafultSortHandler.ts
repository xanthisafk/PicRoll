type Sort = "hot" | "new" | "top" | "controversial" | "all" | "month" | "week" | "day" | "hour"

const setDefaultSort = (sort: Sort) => {
    window !== undefined && localStorage.setItem("picroll-default-sort", sort);
}

const getDefaultSort = () => {
    return window !== undefined && (localStorage.getItem("picroll-default-sort") ?? "hot");
}

export {setDefaultSort, getDefaultSort}