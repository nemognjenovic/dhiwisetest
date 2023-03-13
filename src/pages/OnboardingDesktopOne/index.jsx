import React from "react";

import { Text, Input, Img, SelectBox, Button } from "components";
import { useNavigate } from "react-router-dom";

const OnboardingDesktopOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex font-montserrat items-center justify-start mx-[auto] p-[152px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="bg-bluegray_900 flex flex-col items-center justify-start mx-[auto] p-[39px] md:px-[20px] rounded-[6px] shadow-bs md:w-[100%] w-[65%]">
          <div className="flex flex-col gap-[16px] items-center justify-start mt-[8px] sm:w-[100%] w-[570px]">
            <Text
              className="text-bluegray_100 text-center w-[auto]"
              as="h1"
              variant="h1"
            >
              Welcome to ProAdvisor Chat!
            </Text>
            <Text
              className="font-normal not-italic text-center text-gray_400 w-[auto]"
              as="h3"
              variant="h3"
            >
              Help us create beautiful experience for you
            </Text>
          </div>
          <div className="flex flex-col gap-[24px] items-center justify-start mt-[126px] self-stretch w-[auto]">
            <div className="flex flex-col gap-[5px] items-start justify-start w-[320px]">
              <Text
                className="not-italic text-gray_400 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Username
              </Text>
              <Input
                wrapClassName="bg-bluegray_900 border-[1px] border-bluegray_800 border-solid flex px-[14px] py-[8px] rounded-[5px] w-[100%]"
                className="font-normal not-italic p-[0] placeholder:bg-bluegray_900 placeholder:text-gray_600 text-[12px] text-gray_600 text-left w-[100%]"
                name="frame251"
                placeholder="Placeholder"
                prefix={
                  <Img
                    src="images/img_icon.svg"
                    className="mr-[6px] my-[1px]"
                    alt="⭐️ Icon"
                  />
                }
              ></Input>
            </div>
            <div className="flex flex-col gap-[5px] items-start justify-start w-[320px]">
              <Text
                className="not-italic text-bluegray_200 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Country
              </Text>
              <SelectBox
                className="bg-bluegray_900 border-[1px] border-bluegray_800 border-solid font-normal not-italic px-[14px] py-[8px] rounded-[5px] text-[12px] text-gray_600 text-left w-[100%]"
                placeholderClassName="text-gray_600"
                name="frame251_One"
                placeholder="Choose your country"
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    <Img
                      src="images/img_location.svg"
                      className="h-[14px] mr-[6px] w-[14px]"
                      alt="location"
                    />
                    <span>{e.label}</span>
                  </div>
                )}
                isSearchable={true}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_icon_bluegray_200.svg"
                    className="h-[14px] w-[14px]"
                    alt="⭐️ Icon"
                  />
                }
              ></SelectBox>
            </div>
            <div className="flex flex-col gap-[5px] items-start justify-start w-[320px]">
              <Text
                className="not-italic text-bluegray_200 text-left w-[auto]"
                as="h4"
                variant="h4"
              >
                Products to advise on
              </Text>
              <SelectBox
                className="bg-bluegray_900 border-[1px] border-bluegray_800 border-solid font-normal not-italic px-[14px] py-[8px] rounded-[5px] text-[12px] text-gray_600 text-left w-[100%]"
                placeholderClassName="text-gray_600"
                name="frame251_Two"
                placeholder="Click to select Product/Topic"
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    <Img
                      src="images/img_clock.svg"
                      className="h-[14px] mr-[6px] w-[14px]"
                      alt="clock"
                    />
                    <span>{e.label}</span>
                  </div>
                )}
                isSearchable={true}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_icon_bluegray_200.svg"
                    className="h-[14px] w-[14px]"
                    alt="⭐️ Icon"
                  />
                }
              ></SelectBox>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start mb-[9px] mt-[117px] self-stretch w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
              <div
                className="common-pointer flex items-center justify-center sm:px-[20px] px-[22px] py-[10px] self-stretch w-[auto]"
                onClick={() => navigate("/onboardingdesktoptwo")}
              >
                <Text
                  className="font-medium text-bluegray_400 text-center tracking-[0.40px] w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Skip
                </Text>
              </div>
              <Button
                className="common-pointer bg-deep_purple_A200 cursor-pointer font-medium leading-[normal] min-w-[184px] sm:px-[20px] px-[22px] py-[10px] rounded-[5px] text-[14px] text-center text-white_A700 tracking-[0.40px] w-[auto]"
                onClick={() => navigate("/onboardingdesktoptwo")}
              >
                Save and Contiune
              </Button>
            </div>
            <div className="h-[12px] overflow-hidden relative w-[100%]">
              <div className="w-full h-full absolute bg-deep_purple_A200_1e rounded-[6px]"></div>
              <div
                className="h-full absolute bg-deep_purple_A200  rounded-[6px]"
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingDesktopOnePage;
