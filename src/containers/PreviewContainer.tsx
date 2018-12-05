import { connect } from "react-redux";
import { FormStateMap } from "redux-form";
import { Preview } from "../components/Preview";

const mapStateToProps = (state: object & FormStateMap) => ({
  ...state.contact
});
const connector = connect(mapStateToProps);

export const PreviewContainer = connector(Preview);
