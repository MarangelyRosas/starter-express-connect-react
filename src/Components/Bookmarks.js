import { useState, useEffect } from "react";
import axios from "axios";
import Bookmark from "./Bookmark";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/bookmarks`)
    .then((res) => {
      setBookmarks(res.data);
    }); 
  //   fetch(`${process.env.REACT_APP_API_URL}/bookmarks`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBookmarks(data);
  //     })
  }, []);


  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map((bookmark, index) => {
              return <Bookmark key={index} bookmark={bookmark} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
