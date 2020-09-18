import React from "react";
import { TansactionsData } from "../data";
import TransactionsListing from "../components/transactions.component";

function CustomerRewards() {

  const calRewards = (perchase) => {
    if (perchase >= 50 && perchase < 100) {
      return perchase - 50;
    } else if (perchase > 100) {
      return 2 * (perchase - 100) + 50;
    }
    return 0;
  };

  const getLastThreeMonthsList = (list) => {
    const today = new Date();
    const lastThreeMonths = today.setMonth(today.getMonth() - 3);
    return list
      .filter((ele) => ele.date > lastThreeMonths)
      .sort((a, b) => b.date - a.date);
  };

  const listingData = TansactionsData.map(({ id, perchase, date }) => ({
    id,
    date: new Date(date),
    perchase,
    rewards: calRewards(perchase),
  }));

  return (
    <>
      <h1>Customer Transcation Data</h1>
      <TransactionsListing listingData={getLastThreeMonthsList(listingData)} />
    </>
  );
}

export default CustomerRewards;
