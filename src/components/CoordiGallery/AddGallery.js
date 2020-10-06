import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { addGallery } from "../../_reducers/gallery_reducer";
import { withRouter } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import { getLoggedInUser } from "../../helpers/authUtils";
import DropDown from "../../components/DropDown/DropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    width: "98%", // Fix IE 11 issue.
    // marginTop: theme.spacing(0),
  },
}));

const AddGallery = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [gallery, setGallery] = useState({
    id: null,
    header: "",
    title: "",
    contents: "",
    writer: "",
    regiDate: "",
  });

  const id = useSelector((state) => state.galleries.slice(-1)[0].id + 1);

  const loginUser = getLoggedInUser().name;

  useEffect(() => {
    setGallery({
      ...gallery,
      id: id,
      writer: loginUser,
      regiDate: new Date().toLocaleDateString(),
    });
  }, []);

  const onChangeHandler = (e) => {
    setGallery({
      ...gallery,
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = () => {
    dispatch(addGallery(gallery));
    props.history.push("/admin/gallery");
  };

  return (
    <div style={{ display: "flex" }}>
      <form className={classes.form}>
        <div className={classes.root}>
          <div>
            <DropDown
              onChange={(value) => setGallery({ ...gallery, header: value })}
            />
            <TextField
              name="title"
              label="제목"
              multiline
              fullWidth
              variant="outlined"
              value={gallery.title}
              onChange={onChangeHandler}
            />

            <TextField
              name="contents"
              label="내용"
              multiline
              fullWidth
              variant="outlined"
              rows={15}
              value={gallery.contents}
              onChange={onChangeHandler}
            />

            <Button
              style={{ margin: "3px" }}
              className="write-btn"
              variant="contained"
              color="primary"
              onClick={onClickHandler}
            >
              등록
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(AddGallery);
