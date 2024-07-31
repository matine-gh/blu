'use client'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getLoansLoading} from "@/store/getLoans/action";
import HistoryTable from "@/app/components/History/HistoryTable";
import {LoanInterface} from "@/app/components/Loan/loan.interface";

export default function History() {




    return (
        <div>
            <h1>تاریخچه</h1>
            <HistoryTable />
        </div>
    )
}