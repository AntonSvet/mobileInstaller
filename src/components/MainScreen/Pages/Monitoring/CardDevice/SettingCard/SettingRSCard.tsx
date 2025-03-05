 import { useState } from "react";
import { radioDevice } from "../../../../../../utils/mock";
 import   "./settingRSCard.css"
 
 const SettingRSCard =  () => {
    const [device, setDevice] = useState(radioDevice[5]);
 

   return (
     <div className="setting-rs-card">
       <header>
         <div>
           <div className="setting-rs-card-back-arrow">{"<"}</div>
           <div className="setting-rs-card-font-size">
             <div className="setting-rs-card-header-position">
               <span>{device.fullName}</span>
               <span> {device.name} № {device.number}</span>
             </div>
           </div>
         </div>

         <div className="setting-rs-card-main-header">
           <div className="setting-rs-card-main-header-inside">
             <div>
               <span>Корпус - </span>
               <span>Закрыт </span>
             </div>
             <div>
               <span>Связь с КП - </span>
               <span>Норма </span>
             </div>
           </div>
           <div className="setting-rs-card-main-header-inside">
             <div>
               <span>Питание - </span>
               <span>Норма </span>
             </div>
             <div>
               <span>Версия ПО - </span>
               <span>1,0а </span>
             </div>
           </div>
         </div>
       </header>
       <div className="setting-rs-card-content">
         {device.zone.map((item: any, i: number) => {
           return (
             <div style={{ minHeight: "137px" }} key={i} className="setting-rs-card-one">
               <div className="setting-rs-card-inside">
                 <div className="setting-rs-card-block">
                   <div className="setting-rs-card-block-row">
                     <span>№ Зоны</span>
                     <input width="30px" />
                   </div>
                   <div className="setting-rs-card-block-row">
                     <span>№ Раздела</span>
                     <input width="30px" />
                   </div>
                 </div>
                 <div className="setting-rs-card-block">
                   <span style={{ marginRight: "8px" }}>Тип</span>
                   <select style={{ fontSize: "17px" }} name="" id="">
                     <option style={{ fontSize: "17px" }}>Охранная с зад.(Проходная) с контр. взлома</option>
                     <option style={{ fontSize: "17px" }} value="Охранная">
                       Охранная
                     </option>
                   </select>
                 </div>
                 <div className="setting-rs-card-block">
                   <div className="setting-rs-card-block-row">
                     <span>Задержка вход</span>
                     <input width="30px" />
                   </div>
                   <div className="setting-rs-card-block-row">
                     <span>Выход</span>
                     <input width="30px" />
                   </div>
                 </div>
               </div>
             </div>
           );
         })}
       </div>
     </div>
   );
 };
 
 export default SettingRSCard;
 