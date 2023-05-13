import { FC } from "react";
import Mellat from "./../../../../assets/icons/bank/Mellat";
import Melli from "./../../../../assets/icons/bank/Melli";
import Guaranty from "./../../../../assets/icons/facility/Guaranty";
import GuarantyGray from "./../../../../assets/icons/facility/GuarantyGray";
import Price from "./../../../../assets/icons/facility/Price";
import PriceGray from "./../../../../assets/icons/facility/PriceGray";
import Refund from "./../../../../assets/icons/facility/Refund";
import RefundGray from "./../../../../assets/icons/facility/RefundGray";
import Replay from "./../../../../assets/icons/facility/Replay";
import ReplayGray from "./../../../../assets/icons/facility/ReplayGray";
import Truck from "./../../../../assets/icons/facility/Truck";
import TruckGray from "./../../../../assets/icons/facility/TruckGray";
import Wallet from "./../../../../assets/icons/facility/Wallet";
import WalletGray from "./../../../../assets/icons/facility/WalletGray";
import Blog from "./../../../../assets/icons/favIcon/Blog";
import Site from "./../../../../assets/icons/favIcon/Site";
import CancelOne from "./../../../../assets/icons/fill/CancelOne";
import CancelTwo from "./../../../../assets/icons/fill/CancelTwo";
import ComingBackOne from "./../../../../assets/icons/fill/ComingBackOne";
import ComingBackTwo from "./../../../../assets/icons/fill/ComingBackTwo";
import DeliverOne from "./../../../../assets/icons/fill/DeliverOne";
import DeliverTwo from "./../../../../assets/icons/fill/DeliverTwo";
import LeavingOne from "./../../../../assets/icons/fill/LeavingOne";
import LeavingTwo from "./../../../../assets/icons/fill/LeavingTwo";
import PendingOne from "./../../../../assets/icons/fill/PendingOne";
import PendingTwo from "./../../../../assets/icons/fill/PendingTwo";
import PreparationOne from "./../../../../assets/icons/fill/PreparationOne";
import PreparationTwo from "./../../../../assets/icons/fill/PreparationTwo";
import ReturnConfirmOne from "./../../../../assets/icons/fill/ReturnConfirmOne";
import ReturnConfirmTwo from "./../../../../assets/icons/fill/ReturnConfirmTwo";
import ReturnDisapprovalOne from "./../../../../assets/icons/fill/ReturnDisapprovalOne";
import ReturnDisapprovalTwo from "./../../../../assets/icons/fill/ReturnDisapprovalTwo";
import ReturnOne from "./../../../../assets/icons/fill/ReturnOne";
import ReturnTwo from "./../../../../assets/icons/fill/ReturnTwo";
import TruckOne from "./../../../../assets/icons/fill/TruckOne";
import TruckTwo from "./../../../../assets/icons/fill/TruckTwo";
import WaitingOne from "./../../../../assets/icons/fill/WaitingOne";
import WaitingThree from "./../../../../assets/icons/fill/WaitingThree";
import WaitingTwo from "./../../../../assets/icons/fill/WaitingTwo";
import Address from "./../../../../assets/icons/flat/Address";
import Alert from "./../../../../assets/icons/flat/Alert";
import Arrow from "./../../../../assets/icons/flat/Arrow";
import Breadcrumb from "./../../../../assets/icons/flat/Breadcrumb";
import Check from "./../../../../assets/icons/flat/Check";
import Checkmark from "./../../../../assets/icons/flat/Checkmark";
import Chevron from "./../../../../assets/icons/flat/Chevron";
import Clock from "./../../../../assets/icons/flat/Clock";
import Close from "./../../../../assets/icons/flat/Close";
import Copy from "./../../../../assets/icons/flat/Copy";
import Dislike from "./../../../../assets/icons/flat/Dislike";
import Edit from "./../../../../assets/icons/flat/Edit";
import Eye from "./../../../../assets/icons/flat/Eye";
import FavoriteActive from "./../../../../assets/icons/flat/FavoriteActive";
import FavoriteDeactive from "./../../../../assets/icons/flat/FavoriteDeactive";
import Filter from "./../../../../assets/icons/flat/Filter";
import Gift from "./../../../../assets/icons/flat/Gift";
import Information from "./../../../../assets/icons/flat/Information";
import Like from "./../../../../assets/icons/flat/Like";
import Link from "./../../../../assets/icons/flat/Link";
import Loading from "./../../../../assets/icons/flat/Loading";
import Lock from "./../../../../assets/icons/flat/Lock";
import Logout from "./../../../../assets/icons/flat/Logout";
import Menu from "./../../../../assets/icons/flat/Menu";
import Minus from "./../../../../assets/icons/flat/Minus";
import More from "./../../../../assets/icons/flat/More";
import Notification from "./../../../../assets/icons/flat/Notification";
import OrderTracking from "./../../../../assets/icons/flat/OrderTracking";
import Plus from "./../../../../assets/icons/flat/Plus";
import Print from "./../../../../assets/icons/flat/Print";
import Ruler from "./../../../../assets/icons/flat/Ruler";
import Share from "./../../../../assets/icons/flat/Share";
import Shopping from "./../../../../assets/icons/flat/Shopping";
import Sort from "./../../../../assets/icons/flat/Sort";
import Star from "./../../../../assets/icons/flat/Star";
import Trash from "./../../../../assets/icons/flat/Trash";
import UserLogin from "./../../../../assets/icons/flat/UserLogin";
import UserLogout from "./../../../../assets/icons/flat/UserLogout";
import Bleach from "./../../../../assets/icons/light/Bleach";
import CheckoutFail from "./../../../../assets/icons/light/CheckoutFail";
import CheckoutSuccess from "./../../../../assets/icons/light/CheckoutSuccess";
import Fabric from "./../../../../assets/icons/light/Fabric";
import MachineWash from "./../../../../assets/icons/light/MachineWash";
import NoAddress from "./../../../../assets/icons/light/NoAddress";
import NoFilter from "./../../../../assets/icons/light/NoFilter";
import NoShopping from "./../../../../assets/icons/light/NoShopping";
import NotFoundIcon from "./../../../../assets/icons/light/NotFoundIcon";
import Mahex from "./../../../../assets/icons/post/Mahex";
import Motor from "./../../../../assets/icons/post/Motor";
import Pishtaz from "./../../../../assets/icons/post/Pishtaz";
import Tipax from "./../../../../assets/icons/post/Tipax";
import Aparat from "./../../../../assets/icons/social/Aparat";
import Bale from "./../../../../assets/icons/social/Bale";
import Eita from "./../../../../assets/icons/social/Eita";
import Facebook from "./../../../../assets/icons/social/Facebook";
import Instagram from "./../../../../assets/icons/social/Instagram";
import Linkedin from "./../../../../assets/icons/social/Linkedin";
import RubikaFill from "./../../../../assets/icons/social/RubikaFill";
import RubikaGray from "./../../../../assets/icons/social/RubikaGray";
import RubikaStroke from "./../../../../assets/icons/social/RubikaStroke";
import Telegram from "./../../../../assets/icons/social/Telegram";
import Twitter from "./../../../../assets/icons/social/Twitter";
import Whatsapp from "./../../../../assets/icons/social/Whatsapp";
import Container from "./../Container";
import Search from "././../../../../assets/icons/flat/Search";

interface IconsProps {}

const Icons: FC<IconsProps> = (props) => {
  const {} = props;
  return (
    <Container>
      <h2 className="text-lg font-bold mb-2">Icons</h2>
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
  );
};

export default Icons;
