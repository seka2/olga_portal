import ScheduleIcon from "shared/assets/icons/schedule.svg?react";
import TickerIcon from "shared/assets/icons/ticker.svg?react";
// import SortingIcon from "shared/assets/icons/sorting.svg?react";

import classes from "./AnalyticsTable.module.scss";
import { useEffect, useState } from "react";
import { getAnalytics } from "http/siteApi";
import { AnalyticsPost } from "types/analytics";
import ReactPaginate from "react-paginate";

interface AnalyticsTableProps {
  search: string;
}

export const AnalyticsTable: React.FC<AnalyticsTableProps> = (props) => {

  // const [sortDirection, setSortDirection] = useState("asc");

  const { search } = props;


  const [posts, setPosts] = useState([]);
  // const [sector, setSector] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const sector = "";

  const getAnalyticPosts = async () => {
    const data = await getAnalytics({ page, search, sector });
    setPosts(data.posts);
    setTotalPages(data.total_page);
    return data;
  }

  const __load_async = async() => {
    try {
      await getAnalyticPosts();
    } catch (e) {

    }
  }

  useEffect(() => {
    __load_async();
  }, [page, search, sector]);

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected + 1); // react-paginate uses 0-based index
  };
  

  /*const handleSort = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortDirection("asc");
    }
  };*/

  return (
    <div className={classes.analytics}>
      <div className={classes.overlay}>
        <div className={classes.overflow}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>
                  <div className={classes.sort}>
                    <span>#</span>
                  </div>
                </th>
                <th>Название</th>
                <th>Тикер</th>
                <th>Сектор</th>
                <th>
                  <div className={classes.head}>
                    <span>график</span>
                    <ScheduleIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {posts.map((item: AnalyticsPost) => {

                console.log(item);

                return (
                <tr key={item.post_id}>
                  <td>{item.post_id}</td>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    <div className={classes.ticker}>
                      <TickerIcon />
                      <span>{item.tiker}</span>
                    </div>
                  </td>
                  <td>{item.sector}</td>
                  <td>
                    {item.graph_link != "" && (
                      <a href={ item.graph_link } target="_blank">
                        <div className={classes.schedule}>График</div>
                      </a>
                    )}
                  </td>
                </tr>
                )})}
            </tbody>
          </table>
        </div>

        <br/>

        
        { totalPages > 0 && <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={totalPages}
          previousLabel="<"
          containerClassName="pagination"
          activeClassName="active"
        /> }

        <br/>
        
      </div>
    </div>
  );
};
