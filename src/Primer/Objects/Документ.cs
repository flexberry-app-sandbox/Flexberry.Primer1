﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Primer
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Документ.
    /// </summary>
    // *** Start programmer edit section *** (Документ CustomAttributes)

    // *** End programmer edit section *** (Документ CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДокументE", new string[] {
            "ID as \'ID\'",
            "Описание as \'Описание\'"})]
    [AssociatedDetailViewAttribute("ДокументE", "ТЧ", "ТЧE", true, "", "Табличная Ч", true, new string[] {
            ""})]
    [View("ДокументL", new string[] {
            "ID as \'ID\'",
            "Описание as \'Описание\'",
            "*"})]
    [AssociatedDetailViewAttribute("ДокументL", "ТЧ", "ТЧE", true, "", "Табл часть", true, new string[] {
            ""})]
    public class Документ : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private string fОписание;
        
        private IIS.Primer.DetailArrayOfТЧ fТЧ;
        
        // *** Start programmer edit section *** (Документ CustomMembers)

        // *** End programmer edit section *** (Документ CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Документ.ID CustomAttributes)

        // *** End programmer edit section *** (Документ.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Документ.ID Get start)

                // *** End programmer edit section *** (Документ.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Документ.ID Get end)

                // *** End programmer edit section *** (Документ.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Документ.ID Set start)

                // *** End programmer edit section *** (Документ.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Документ.ID Set end)

                // *** End programmer edit section *** (Документ.ID Set end)
            }
        }
        
        /// <summary>
        /// Описание.
        /// </summary>
        // *** Start programmer edit section *** (Документ.Описание CustomAttributes)

        // *** End programmer edit section *** (Документ.Описание CustomAttributes)
        [StrLen(255)]
        public virtual string Описание
        {
            get
            {
                // *** Start programmer edit section *** (Документ.Описание Get start)

                // *** End programmer edit section *** (Документ.Описание Get start)
                string result = this.fОписание;
                // *** Start programmer edit section *** (Документ.Описание Get end)

                // *** End programmer edit section *** (Документ.Описание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Документ.Описание Set start)

                // *** End programmer edit section *** (Документ.Описание Set start)
                this.fОписание = value;
                // *** Start programmer edit section *** (Документ.Описание Set end)

                // *** End programmer edit section *** (Документ.Описание Set end)
            }
        }
        
        /// <summary>
        /// Документ.
        /// </summary>
        // *** Start programmer edit section *** (Документ.ТЧ CustomAttributes)

        // *** End programmer edit section *** (Документ.ТЧ CustomAttributes)
        public virtual IIS.Primer.DetailArrayOfТЧ ТЧ
        {
            get
            {
                // *** Start programmer edit section *** (Документ.ТЧ Get start)

                // *** End programmer edit section *** (Документ.ТЧ Get start)
                if ((this.fТЧ == null))
                {
                    this.fТЧ = new IIS.Primer.DetailArrayOfТЧ(this);
                }
                IIS.Primer.DetailArrayOfТЧ result = this.fТЧ;
                // *** Start programmer edit section *** (Документ.ТЧ Get end)

                // *** End programmer edit section *** (Документ.ТЧ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Документ.ТЧ Set start)

                // *** End programmer edit section *** (Документ.ТЧ Set start)
                this.fТЧ = value;
                // *** Start programmer edit section *** (Документ.ТЧ Set end)

                // *** End programmer edit section *** (Документ.ТЧ Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДокументE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокументE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокументE", typeof(IIS.Primer.Документ));
                }
            }
            
            /// <summary>
            /// "ДокументL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокументL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокументL", typeof(IIS.Primer.Документ));
                }
            }
        }
    }
}
