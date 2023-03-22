import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  // useEffect(() => {
  //   console.log("Total Clicks", like + dislike);
  // }, []);

  return (
    <div>
      {/* onClick =camelCase */}
      <IconButton
        aria-label="like-btn"
        onClick={() => setLike(like + 1)}
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        aria-label="dislike-btn"
        onClick={() => setDislike(dislike + 1)}
        color="error"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button className="btn-like" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button> */}
      {/* <button className="btn-dislike" onClick={() => setDislike(dislike + 1)}>
        👎 {dislike}
      </button> */}
    </div>
  );
}
