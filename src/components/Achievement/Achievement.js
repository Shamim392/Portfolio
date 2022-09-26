import React from "react";
import "./Achievement.css";

const Achievement = () => {
  return (
    <div class="achievementDiv overflow-hidden">
      <h1 class="achievementHeading">
        My <span className="introSpan">Achievement</span>
      </h1>
      <div class="row rowAchievement">
        <div class="col col-md-12 col-xl-6">
          <div class="achievement">
            <div class="icon">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="">
              <p class="year">2009 - 2014</p>
              <p class="academy">
                <span class="degree">Secondary School Certificate(SSC)</span>
                <br />
                Ferdous Alam Feroj High School
              </p>
            </div>
          </div>
          <div class="achievement">
            <div class="icon">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="">
              <p class="year">2014 - 2016</p>
              <p class="academy">
                <span class="degree">Higher Secondary Certificate(HSC)</span>
                <br />
                Ghatail Cantonment Public School & College
              </p>
            </div>
          </div>
          <div class="achievement">
            <div class="icon">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="">
              <p class="year">2018 - 2022</p>
              <p class="academy">
                <span class="degree">B.Sc. in CSE </span>
                <br />
                <span class="university">
                  International University of Business Agriculture and
                  Technology
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col col-md-12 col-xl-6">
          <div class="achievement">
            <div class="icon">
              <i class="fa-duotone fa-hashtag iconShape"></i>
            </div>
            <div class="">
              <p class="year">2019 - 2020</p>
              <p class="academy">
                <span class="gHash">Participation on Google Hash Code</span>
                <br />
                University Rank - 5th
              </p>
            </div>
          </div>
          <div class="achievement">
            <div class="icon">
              <i class="fa-solid fa-code iconShape"></i>
            </div>
            <div class="">
              <p class="year">20019 - 2020</p>
              <p class="academy">
                <span class="degree">Battle of Intellects (IUBAT-IUPC)</span>
                <br />
                Team Rank - 4th
              </p>
            </div>
          </div>
          <div class="achievement">
            <div class="icon">
              <i class="fa-solid fa-circle-question iconShape"></i>
            </div>
            <div class="">
              <p class="year">2021 - 2022</p>
              <p class="academy">
                <span class="degree">Problem Setter</span>
                <br />
                Battle of Intellects (IUBAT-IUPC)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
