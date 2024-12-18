import React from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Books</title>
      </Helmet>
      <div className="h-screen">
        <div className="mt-[4.25rem] md:mt-[6rem]">
          <div className=" pt-4 flex gap-4 justify-center items-center">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="underline text-[#140d0d] text-base font-bold hover:text-teal-700"
            >
              Back
            </button>
          </div>
        </div>
        <div className="h-72 py-8 flex gap-4 justify-center items-center">
          <Link
            target="_blank"
            to={
              "https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1B75oXsSfcO3FgQTFctCm94R32_YMpO1P%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3kOMjl2MVazB5crQjTz7iJbdffqlTDCLJiyAT2xK6Tl5cC6bV-dclwzT4_aem_7gI6rGs8uavc3uE6HHHHzg&h=AT0UwJgN7aOewCa88P_-Ug0G2bUGZhsVMld9Dk4ohyAa5DUOXQUJTJBOxTBhxMp40Jmr1ng1xrgDKS7_tmPG91ZhOeCQqd1E1awvGtsOANmI4LrlcD0nKrjX2HxhtydFMIGZCDw1yvD5_Lo"
            }
            className=" underline text-teal-700 hover:text-black"
          >
            Math books - 1
          </Link>
          <Link
            target="_blank"
            to={
              "https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F17SqXMHnsdboLtmwsrHHhfBxphA7C8Ww0%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3kOMjl2MVazB5crQjTz7iJbdffqlTDCLJiyAT2xK6Tl5cC6bV-dclwzT4_aem_7gI6rGs8uavc3uE6HHHHzg&h=AT2-GdFTjPYUvIE5sk2-ExXFRcrA4g18R-RUTWv3SvhOlnx6UmEmDoGEMQjkLOJcGJBX8FXX-bE90VPa6V7JQMP6AE7UUkHKKA7EXOMlxC3-_JyeqFBxDELFFUc02PLRQga5MTmYCjyRn1o"
            }
            className=" underline text-teal-700 hover:text-black"
          >
            Math books - 2
          </Link>
          <Link
            target="_blank"
            to={
              "https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F1XhylVEuKlLUSDUsrcHJxE8JEUROBl4Sp%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR04XchLftTCYk3_k9bpisDYdBsnZezUQ_okTRZM2AxuEhe7kz03K9FcH7k_aem_Z-Vwb0eCjpfrcJ3ljH5MBA&h=AT2BviNZn-EllXLoRXW-SsK-3fWqfGuAVZwF9Xuizx1VMYhaX8TAgP6NnUrLBFNnmTwhxNsdGQeUlBYLYM-N6LTWY27j89kkBrOXwrus4oLMz4KPDJTWae9Dqnv7HeoWg3Z8Y8kjsVRMXTs"
            }
            className=" underline text-teal-700 hover:text-black"
          >
            Math books - 3
          </Link>
        </div>
      </div>
    </>
  );
};

export default Books;
