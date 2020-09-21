import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Cookies } from "react-cookie";
import { addPosting } from "../../_reducers/post_reducer";
import { withRouter } from "react-router-dom";

import Alert from "@material-ui/lab/Alert";
import { getLoggedInUser } from "../../helpers/authUtils";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    btn: { margin: theme.spacing(1) },
  },
}));

const AddPost = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [post, setPost] = useState({
    id: null,
    header: "",
    title: "",
    contents: "",
    writer: "",
    regiDate: "",
  });

  const id = useSelector((state) => state.posts.slice(-1)[0].id + 1);

  const loginUser = getLoggedInUser().name;

  useEffect(() => {
    setPost({
      ...post,
      id: id,
      writer: loginUser,
      regiDate: new Date().toLocaleDateString(),
    });
  }, []);

  const onChangeHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = () => {
    if (post.title == "" || post.contents == "") {
      setAlert(true);
    } else {
      console.log(post);
      dispatch(addPosting(post));
      props.history.push("/table");
    }
  };

  const [alert, setAlert] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <form className={classes.root}>
        {alert && <Alert severity="error">모두 입력해 주세요</Alert>}

        <div>
          <TextField
            name="title"
            label="제목"
            multiline
            fullWidth
            variant="outlined"
            value={post.title}
            onChange={(e) => onChangeHandler(e)}
          />

          <TextField
            name="contents"
            label="내용"
            multiline
            fullWidth
            variant="outlined"
            rows={10}
            onChange={(e) => onChangeHandler(e)}
            value={post.contents}
          />

          <Button
            style={{ margin: "3px" }}
            className="write-btn"
            variant="contained"
            color="primary"
            onClick={() => onClickHandler()}
          >
            글쓰기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(AddPost);
