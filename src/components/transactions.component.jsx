import React from "react";
import "./transactions.styles.css";

const RenderBodyListing = ({
    id,
    date,
    perchase,
    rewards,
  }) => {
  return (
    <div class="table-row" key={id}>
      <div class="table-cell">{id}</div>
      <div class="table-cell">{date.toLocaleDateString()}, {date.toLocaleTimeString()}</div>
      <div class="table-cell">${perchase}</div>
      <div class="table-cell">{rewards}</div>
    </div>
  );
};

const TransactionsListing = ({ listingData }) => {
  return (
    <div class="table">
      <div class="table-row">
        <div class="table-head">#id</div>
        <div class="table-head">Date</div>
        <div class="table-head">Perchase</div>
        <div class="table-head">Rewards</div>
      </div>
      {listingData.length && listingData.map(ele => <RenderBodyListing {...ele} />)}
    </div>
  );
};

export default TransactionsListing;
