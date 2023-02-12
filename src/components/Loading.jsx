import React from "react";
import { ContainerLoading } from "./css/Loading";
const Loading = () => {
  return (
    <ContainerLoading>
      <div class="loader">
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
        <div class="loader-square"></div>
      </div>
    </ContainerLoading>
  );
};

export default Loading;
