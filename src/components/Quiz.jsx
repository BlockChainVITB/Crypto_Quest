import Stepper from "./Stepper";
import userIcon from "../assets/user.svg";
import arrowIcon from "../assets/arrow1.svg";

const Questions = [
  {
    component: () => <div>Question 1</div>,
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    component: () => <div>Question 2</div>,
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    component: () => <div>Question 3</div>,
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    component: () => <div>Question 4</div>,
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
  {
    component: () => <div>Question 5</div>,
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
];
function Quiz() {
  return (
    <>
      <div className="bg-[#1A1916] text-white flex flex-col justify-center items-center">
        <div className="w-screen min-h-screen">
          <div className="flex justify-between my-4">
            <h1 className="text-2xl ml-4">Name</h1>
            <div className="flex items-center space-x-2 mr-4">
              <img src={userIcon} alt="User Icon" className="w-6 h-6" />
              <p>Username</p>
              <img src={arrowIcon} alt="User Icon" className="w-4 h-4" />
            </div>
          </div>
          <hr className="mb-4" />
          <Stepper Questions={Questions} />
        </div>
      </div>
    </>
  );
}

export default Quiz;
