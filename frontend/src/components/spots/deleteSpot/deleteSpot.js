import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import {deleteSpot} from '../../../store/spots'

const DeleteSpot = ({spotId}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // const deleteItem = useSelector(state => state.spots.singleSpot)
    // console.log('deleteITEM',deleteItem)

    const onSubmit = async (e) => {
        e.preventDefault();

        const result = await dispatch(deleteSpot(spotId))
        if (result) history.push('/spots/current')
        console.log('result_delete',result)

    }
    return (
        <button onClick={onSubmit}>
            {/* <NavLink id="delte_button" to={'/spots/current'}> */}
                Delete Listing
            {/* </NavLink> */}
        </button>
    )
}
export default DeleteSpot;
