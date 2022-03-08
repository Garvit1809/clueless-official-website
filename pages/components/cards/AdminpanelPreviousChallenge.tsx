import React from "react";

const AdminpanelPreviousChallenge = () => {
  return (
    <div>
      <div className="w-[281px] max-h-[358px] sm:w-[320px] sm:max-h-[440px] shadow-md pb-2 sm:pb-4 rounded-sm">
        <img src="/Dummy.png" alt="" />
        <div className="px-6 space-y-2">
          <h1 className="text-lg sm:text-xl mt-2 sm:mt-4">
            GitHub Challenge for Students
          </h1>
          <p className="text-xs">To enhance your GitHub skills and take you to a different in OpenSource</p>
          <div className="flex justify-between">
            <button className="btn-red text-xs w-[105px] sm:w-[119px]">
              Delete
            </button>
            <button className="btn-blue text-xs w-[105px] sm:w-[119px]">
              Edit
            </button>
          </div>
          <button className="btn-blue text-xs py-2 w-full">
            View Submission
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminpanelPreviousChallenge;