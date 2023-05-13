import type { Meta, StoryObj } from "@storybook/react";
import Address from "../../../../assets/icons/flat/Address";
import Alert from "../../../../assets/icons/flat/Alert";
import Arrow from "../../../../assets/icons/flat/Arrow";
import Breadcrumb from "../../../../assets/icons/flat/Breadcrumb";
import Check from "../../../../assets/icons/flat/Check";
import Checkmark from "../../../../assets/icons/flat/Checkmark";
import Chevron from "../../../../assets/icons/flat/Chevron";
import Clock from "../../../../assets/icons/flat/Clock";
import Close from "../../../../assets/icons/flat/Close";
import Copy from "../../../../assets/icons/flat/Copy";
import Dislike from "../../../../assets/icons/flat/Dislike";
import Edit from "../../../../assets/icons/flat/Edit";
import Eye from "../../../../assets/icons/flat/Eye";
import FavoriteActive from "../../../../assets/icons/flat/FavoriteActive";
import FavoriteDeactive from "../../../../assets/icons/flat/FavoriteDeactive";
import Filter from "../../../../assets/icons/flat/Filter";
import Gift from "../../../../assets/icons/flat/Gift";
import Information from "../../../../assets/icons/flat/Information";
import Like from "../../../../assets/icons/flat/Like";
import Loading from "../../../../assets/icons/flat/Loading";
import Logout from "../../../../assets/icons/flat/Logout";
import Menu from "../../../../assets/icons/flat/Menu";
import Minus from "../../../../assets/icons/flat/Minus";
import More from "../../../../assets/icons/flat/More";
import Notification from "../../../../assets/icons/flat/Notification";
import OrderTracking from "../../../../assets/icons/flat/OrderTracking";
import Plus from "../../../../assets/icons/flat/Plus";
import Print from "../../../../assets/icons/flat/Print";
import Ruler from "../../../../assets/icons/flat/Ruler";
import Search from "../../../../assets/icons/flat/Search";
import Share from "../../../../assets/icons/flat/Share";
import Shopping from "../../../../assets/icons/flat/Shopping";
import Sort from "../../../../assets/icons/flat/Sort";
import Star from "../../../../assets/icons/flat/Star";
import Trash from "../../../../assets/icons/flat/Trash";
import UserLogin from "../../../../assets/icons/flat/UserLogin";
import UserLogout from "../../../../assets/icons/flat/UserLogout";
import Container from "../Container";
import Icons from "./Icons";
import Lock from "../../../../assets/icons/flat/Lock";
import Link from "../../../../assets/icons/flat/Link";
import PendingOne from "../../../../assets/icons/fill/PendingOne";
import PreparationOne from "../../../../assets/icons/fill/PreparationOne";
import LeavingOne from "../../../../assets/icons/fill/LeavingOne";
import TruckOne from "../../../../assets/icons/fill/TruckOne";
import DeliverOne from "../../../../assets/icons/fill/DeliverOne";
import CancelOne from "../../../../assets/icons/fill/CancelOne";
import ReturnOne from "../../../../assets/icons/fill/ReturnOne";
import WaitingOne from "../../../../assets/icons/fill/WaitingOne";
import ReturnConfirmOne from "../../../../assets/icons/fill/ReturnConfirmOne";
import ReturnDisapprovalOne from "../../../../assets/icons/fill/ReturnDisapprovalOne";
import ComingBackOne from "../../../../assets/icons/fill/ComingBackOne";
import PendingTwo from "../../../../assets/icons/fill/PendingTwo";
import PreparationTwo from "../../../../assets/icons/fill/PreparationTwo";
import LeavingTwo from "../../../../assets/icons/fill/LeavingTwo";
import TruckTwo from "../../../../assets/icons/fill/TruckTwo";
import DeliverTwo from "../../../../assets/icons/fill/DeliverTwo";
import CancelTwo from "../../../../assets/icons/fill/CancelTwo";
import ReturnTwo from "../../../../assets/icons/fill/ReturnTwo";
import WaitingTwo from "../../../../assets/icons/fill/WaitingTwo";
import WaitingThree from "../../../../assets/icons/fill/WaitingThree";
import ReturnConfirmTwo from "../../../../assets/icons/fill/ReturnConfirmTwo";
import ReturnDisapprovalTwo from "../../../../assets/icons/fill/ReturnDisapprovalTwo";
import ComingBackTwo from "../../../../assets/icons/fill/ComingBackTwo";
import NoFilter from "../../../../assets/icons/light/NoFilter";
import NoShopping from "../../../../assets/icons/light/NoShopping";
import NoAddress from "../../../../assets/icons/light/NoAddress";
import CheckoutSuccess from "../../../../assets/icons/light/CheckoutSuccess";
import CheckoutFail from "../../../../assets/icons/light/CheckoutFail";
import NotFoundIcon from "../../../../assets/icons/light/NotFoundIcon";
import MachineWash from "../../../../assets/icons/light/MachineWash";
import Fabric from "../../../../assets/icons/light/Fabric";
import Bleach from "../../../../assets/icons/light/Bleach";
import Mellat from "../../../../assets/icons/bank/Mellat";
import Melli from "../../../../assets/icons/bank/Melli";
import Pishtaz from "../../../../assets/icons/post/Pishtaz";
import Tipax from "../../../../assets/icons/post/Tipax";
import Mahex from "../../../../assets/icons/post/Mahex";
import Motor from "../../../../assets/icons/post/Motor";
import Truck from "../../../../assets/icons/facility/Truck";
import Wallet from "../../../../assets/icons/facility/Wallet";
import Refund from "../../../../assets/icons/facility/Refund";
import Guaranty from "../../../../assets/icons/facility/Guaranty";
import Replay from "../../../../assets/icons/facility/Replay";
import Price from "../../../../assets/icons/facility/Price";
import TruckGray from "../../../../assets/icons/facility/TruckGray";
import WalletGray from "../../../../assets/icons/facility/WalletGray";
import RefundGray from "../../../../assets/icons/facility/RefundGray";
import GuarantyGray from "../../../../assets/icons/facility/GuarantyGray";
import ReplayGray from "../../../../assets/icons/facility/ReplayGray";
import PriceGray from "../../../../assets/icons/facility/PriceGray";
import Instagram from "../../../../assets/icons/social/Instagram";
import Telegram from "../../../../assets/icons/social/Telegram";
import Twitter from "../../../../assets/icons/social/Twitter";
import Aparat from "../../../../assets/icons/social/Aparat";
import Whatsapp from "../../../../assets/icons/social/Whatsapp";
import Facebook from "../../../../assets/icons/social/Facebook";
import Linkedin from "../../../../assets/icons/social/Linkedin";
import Bale from "../../../../assets/icons/social/Bale";
import RubikaGray from "../../../../assets/icons/social/RubikaGray";
import RubikaFill from "../../../../assets/icons/social/RubikaFill";
import RubikaStroke from "../../../../assets/icons/social/RubikaStroke";
import Eita from "../../../../assets/icons/social/Eita";
import Site from "../../../../assets/icons/favIcon/Site";
import Blog from "../../../../assets/icons/favIcon/Blog";

const meta: Meta<typeof Icons> = {
  title: "ApplicationUI/Icons",
  component: Icons,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const AllIcons: Story = {
  render: () => (
    <Container>
      {/* flat icons */}
      <div className="flex items-center gap-3">
        <Search />
        <Shopping />
        <UserLogout />
        <UserLogin />
        <Chevron className="-rotate-90" />
        <Chevron className="rotate-90" />
        <Chevron />
        <Chevron className="rotate-180" />
        <FavoriteDeactive />
        <FavoriteActive />
        <Clock />
        <Loading />
        <Arrow className="-rotate-90" />
        <Arrow className="rotate-90" />
        <Arrow className="-rotate-180" />
        <Arrow className="" />
        <Close />
        <Checkmark />
        <Menu />
        <More />
        <Breadcrumb />
        <Star />
        <Check />
        <Information />
        <Alert />
        <Like />
        <Dislike />
        <Share />
      </div>
      <div className="flex items-center gap-3 mt-3">
        <Notification />
        <Plus />
        <Minus />
        <Sort />
        <Filter />
        <Trash />
        <OrderTracking />
        <Logout />
        <Gift />
        <Copy />
        <Print />
        <Ruler />
        <Edit />
        <Address />
        <Eye />
        <Lock />
        <Link />
      </div>
      {/* fill icons */}
      <div className="flex items-center gap-3 mt-3">
        <PendingOne />
        <PreparationOne />
        <LeavingOne />
        <TruckOne />
        <DeliverOne />
        <CancelOne />
        <ReturnOne />
        <WaitingOne />
        <ReturnConfirmOne />
        <ReturnDisapprovalOne />
        <ComingBackOne />
        <PendingTwo />
        <PreparationTwo />
        <LeavingTwo />
        <TruckTwo />
        <DeliverTwo />
        <CancelTwo />
        <ReturnTwo />
        <WaitingTwo />
        <WaitingThree />
        <ReturnConfirmTwo />
        <ReturnDisapprovalTwo />
        <ComingBackTwo />
      </div>
      {/* light icons */}
      <div className="flex items-center gap-3 mt-3">
        <NoFilter />
        <NoShopping />
        <NoAddress />
        <CheckoutSuccess />
        <CheckoutFail />
        <NotFoundIcon />
        <MachineWash />
        <Fabric />
        <Bleach />
      </div>
      {/* bank icons */}
      <div className="flex items-center gap-3 mt-3">
        <Mellat />
        <Melli />
      </div>
      {/* post icons */}
      <div className="flex items-center gap-3 mt-3">
        <Pishtaz />
        <Tipax />
        <Mahex />
        <Motor />
      </div>
      {/* facility icons */}
      <div className="flex items-center gap-3 mt-3">
        <Truck />
        <Wallet />
        <Refund />
        <Guaranty />
        <Replay />
        <Price />
        <TruckGray />
        <WalletGray />
        <RefundGray />
        <GuarantyGray />
        <ReplayGray />
        <PriceGray />
      </div>
      {/* social icons */}
      <div className="flex items-center gap-3 mt-3">
        <Instagram />
        <Telegram />
        <Twitter />
        <Aparat />
        <Whatsapp />
        <Facebook />
        <Linkedin />
        <Bale />
        <RubikaGray />
        <RubikaFill />
        <RubikaStroke />
        <Eita />
      </div>
       {/* fav icons */}
       <div className="flex items-center gap-3 mt-3">
        <Site />
        <Blog />
      </div>
    </Container>
  ),
};
