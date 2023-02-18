import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import { getUserAllBookingsThunk } from '../../../store/bookings.js';
import { deleteOneBookingThunk } from '../../../store/bookings.js';
import AddNewReviewModal from '../../AddNewReviewModal/index.js';
import './UserBookingsPage.css';
import '../../UserListingPage/UserListingPage.css'
