/* ==========================================================================
   Platforma slaydi uchun ma'lumot — O'zbekiston viloyatlari.
   slide2.html dan avtomatik ko'chirilgan (scratchpad/extract-map.js).
   Summalar mln so'mda — jami/oraliq qiymatlar shu yerdan hisoblanadi,
   shuning uchun kartalardagi raqamlar xarita bilan doim mos keladi.
   ========================================================================== */

const UZ_REGIONS = [
  {
    id: "karakalpakstan",
    n: ["Qoraqalpog'iston Respublikasi", "Республика Каракалпакстан"],
    lbl: ["Qoraqalpog'iston", "Каракалпакстан"],
    x: 162, y: 173, fs: 13,
    jamiN: 52, jamiS: 640,
    tolabN: 42, tolabS: 510,
    qarzN: 10, qarzS: 130,
    xodim: 6,
    d: "M48.9,86.8L48.9,54.4L154.9,20L171.4,32.9L243.2,74.9L258,91.2L259.3,98.9L294.8,139.8L305.7,151.6L314.4,153.9L294.2,194.1L291.3,205.3L296.3,220.9L281.8,230.4L313,273.2L301.7,279.5L285,261.8L278.5,259.5L270.3,259.1L270.3,266.8L268.2,267L251.9,252.3L252.4,250.7L241.2,242.5L239.5,237.8L233.6,235.5L233.8,232.3L231.7,231.3L230.4,226.1L225.4,224L221.5,227.6L219.2,226.3L219.1,231.6L213.7,226.5L210.1,225.9L209.8,223.1L213.6,224.1L214.7,218.8L210.7,216L211.4,213.9L213.3,214.7L213.2,212L208.3,207.1L205,208.8L189.5,207.6L184.2,203.8L178.8,194.4L172.4,194.6L156.5,179.6L157.6,183.5L155,188.1L149.9,188.5L142.3,185.8L137.2,189.4L143.4,193.5L148.2,202.8L152.2,206L152.1,208.7L147,207.9L146.4,201.8L144.1,199L139,197.8L136.3,199.3L136,196.8L132.5,195.9L129.9,197L129.4,200.2L127.1,198.9L128.7,203.3L127.9,210.3L124.6,210.2L124.5,214.4L116.5,216.3L104.4,215.9L99.6,218.6L95.2,226.9L89.9,229.5L88.7,241.8L91.4,255.1L93.4,258.1L96.4,258.4L91.6,264.2L48.9,261.1L48.9,86.8Z",
  },
  {
    id: "khorezm",
    n: ["Xorazm viloyati", "Хорезмская область"],
    lbl: ["Xorazm", "Хорезм"],
    x: 251, y: 255, fs: 11,
    jamiN: 62, jamiS: 760,
    tolabN: 50, tolabS: 610,
    qarzN: 12, qarzS: 150,
    xodim: 5,
    d: "M218.9,257.8L215.7,253.6L220,245.4L214.6,237.5L216.4,234.2L225.8,237.5L223.6,234L219.4,232L218.6,228.1L219.2,226.3L221.5,227.6L225.4,224L231.4,227.3L233.6,235.5L239.5,237.8L241.5,242.8L252.4,250.7L252.1,252.5L270,267.8L267.2,270.4L263.5,270.6L255,263.8L254.9,266.4L244.1,264.4L232.8,266.7L218.9,257.8Z M270.2,266.6L270.4,262.8L279.3,264.1L289.8,272.5L294.5,279.9L294,287.3L300.5,302.6L312.4,293.2L313.1,288.5L304.2,277.7L301.7,279.5L285,261.8L270.3,259.1L270.2,266.6Z",
  },
  {
    id: "navoiy",
    n: ["Navoiy viloyati", "Навоийская область"],
    lbl: ["Navoiy", "Навои"],
    x: 400, y: 280, fs: 13,
    jamiN: 58, jamiS: 710,
    tolabN: 46, tolabS: 560,
    qarzN: 12, qarzS: 150,
    xodim: 7,
    d: "M289.4,240.4L281.9,229.8L296.3,220.9L291.3,205.3L294.2,194.1L314.4,153.9L305.7,151.6L294.8,139.8L349.9,131.6L398.4,136.1L414.7,126.8L417.6,128L425,140.4L440.4,152L452,176.2L462.4,171.7L461.3,205.1L458.5,203.9L458.4,227.3L480.2,230.6L484.8,259.6L487.5,270.7L489.5,271.8L484.8,272.4L485.2,283.5L490.1,284L489.9,294.3L485.2,305.9L483,305.6L481.1,299.2L477,301.1L468.4,299.4L468.2,306.4L466.4,308.3L467.7,310.5L463.9,323.3L466.3,323.5L465.9,326.7L461.7,330.5L452.8,332L447.5,330.5L439.2,323.2L435.5,329.3L437.5,330.7L436.4,337.6L431,335.8L428.5,338.3L422.3,337.2L426.6,343.3L427.3,348.5L425.2,353.7L427.9,359.4L423.2,360.9L421.1,354.7L418.1,354.9L418.4,349L412.1,345.8L410.7,347.5L409.1,346.4L401.5,336.7L408.3,329.6L410.1,325.1L413.5,323.4L411.7,321.4L412.1,313.4L423.7,315.6L425.1,310.4L426.9,310.1L427.8,303.8L432.8,304.4L433,296.5L413.1,293.9L409.8,291.8L407.3,281.4L405.3,285.8L395,286.9L394.1,291.3L379.7,289.6L379.7,282.8L377.4,281L374.5,283L370.3,292.7L364.9,293.7L364.6,290.6L355,282.2L337.9,276.5L334.9,277L331.3,267.3L322.8,260.8L318.6,253L300.7,256.4L289.4,240.4Z",
  },
  {
    id: "bukhara",
    n: ["Buxoro viloyati", "Бухарская область"],
    lbl: ["Buxoro", "Бухара"],
    x: 365, y: 340, fs: 12,
    jamiN: 78, jamiS: 950,
    tolabN: 62, tolabS: 750,
    qarzN: 16, qarzS: 200,
    xodim: 8,
    d: "M300.7,256.4L313,273.2L304.2,277.7L313.1,288.5L312.4,293.2L301,302.8L308.9,308.8L308.3,312.2L310.6,315.3L311.6,323L310.8,327L313.5,333.9L383.9,387.4L390.1,385.7L392.3,387.9L397.8,381.4L413,376.7L411.1,371.2L422.9,360.6L422.6,357.6L421.1,354.7L418.1,354.9L418.4,349L412.1,345.8L410.7,347.5L409.1,346.4L401.5,336.7L408.3,329.6L410.1,325.1L413.5,323.4L411.7,321.4L412.1,313.4L423.7,315.6L425.1,310.4L426.9,310.1L427.8,303.8L432.8,304.4L433,296.5L413.1,293.9L409.8,291.8L407.3,281.4L405.3,285.8L395,286.9L394.1,291.3L379.7,289.6L379.7,282.8L377.4,281L374.5,283L370.3,292.7L364.9,293.7L364.6,290.6L355,282.2L337.9,276.5L334.9,277L331.3,267.3L322.8,260.8L318.6,253L300.7,256.4Z",
  },
  {
    id: "samarkand",
    n: ["Samarqand viloyati", "Самаркандская область"],
    lbl: ["Samarqand", "Самарканд"],
    x: 475, y: 345, fs: 12,
    jamiN: 125, jamiS: 1500,
    tolabN: 98, tolabS: 1200,
    qarzN: 27, qarzS: 330,
    xodim: 14,
    d: "M422.3,337.2L426.6,343.3L427.3,348.5L425.2,353.7L428.5,359.6L451.9,358.7L457.2,367L461.4,368.9L464.3,364.6L468.6,363.2L471,365.9L475,364L478.9,367L488.7,361.5L494.9,364.5L494,370.3L500.3,370.8L503,366.7L512.8,369.3L518.8,368.3L518.4,360.9L515.5,357.7L518.6,357.3L517.9,354.8L519.8,354.5L515.6,350.7L514.9,346.3L521.3,341.8L516,336.3L506.7,336.5L503.3,335.5L502.7,333L501.5,334.1L500.2,332.4L502.5,331L501.3,327.7L496.4,325.5L499.1,322.1L494.3,318.6L494.7,306.3L485.3,307L483,305.6L483.1,301.8L480.8,299.1L477,301.1L468.4,299.4L468.2,306.4L466.4,308.3L467.7,310.5L463.9,323.3L466.4,323.9L463.7,329.2L452.1,331.9L444.8,329L444,326.4L439.2,323.2L435.5,329.3L437.5,330.7L436.4,337.6L431,335.8L428.5,338.3L422.3,337.2Z",
  },
  {
    id: "kashkadarya",
    n: ["Qashqadaryo viloyati", "Кашкадарьинская область"],
    lbl: ["Qashqadaryo", "Кашкадарья"],
    x: 475, y: 400, fs: 12,
    jamiN: 88, jamiS: 1100,
    tolabN: 70, tolabS: 850,
    qarzN: 18, qarzS: 220,
    xodim: 9,
    d: "M392.3,387.9L397.8,381.4L413,376.7L411.1,371.2L422.9,360.6L444.9,360L448,357.9L451.9,358.7L460,368.7L468.6,363.2L471,365.9L475,364L478.9,367L485,362.5L489.9,361.5L495,364.7L494,370.3L500.3,370.8L501.5,367L507,367.5L512.7,369L513.4,373.2L524.4,375.9L527.2,378.6L527.3,384.3L519.1,386.9L521.7,392.6L520.3,400.7L515.3,400L512.9,401.6L511.9,405.4L505.8,410.7L503.7,416L492.5,423.4L491.9,429.2L487.4,431.7L482.9,437.6L474.5,436L468.6,429.7L465.2,429.6L454.9,423.3L451.5,424.7L439.6,422.7L392.3,387.9Z",
  },
  {
    id: "surkhandarya",
    n: ["Surxondaryo viloyati", "Сурхандарьинская область"],
    lbl: ["Surxondaryo", "Сурхандарья"],
    x: 520, y: 440, fs: 12,
    jamiN: 65, jamiS: 790,
    tolabN: 52, tolabS: 630,
    qarzN: 13, qarzS: 160,
    xodim: 7,
    d: "M480,469L482.4,465.8L479.9,460.6L480.9,448.5L486.7,442L486.5,439.4L482.9,437.6L487.4,431.7L491.9,429.2L492.5,423.4L503.7,416L505.8,410.7L511.9,405.4L512.9,401.6L515.3,400L520.3,400.7L521.7,392.6L519.2,386.7L527.2,384.3L528.3,385.6L539.6,383.6L545.1,384.7L548.8,389.5L548.6,393L543.1,395.1L545.6,399.5L542.6,400.4L544.1,404.2L542.9,410L545.1,413.3L542.9,417.3L545.9,416.3L556.9,428.4L551.9,441.7L545.9,441.4L540.9,453.1L534.7,456.5L531.7,467.8L533.8,472.5L531.7,479.8L523.8,477.1L522.5,478.1L519.6,475.5L509.9,479.9L508.5,476.8L503.8,474.6L501.3,469.8L497.1,468.9L493.3,471.1L486.7,471L485.2,472.8L480,469Z",
  },
  {
    id: "jizzakh",
    n: ["Jizzax viloyati", "Джизакская область"],
    lbl: ["Jizzax", "Джизак"],
    x: 530, y: 320, fs: 11,
    jamiN: 55, jamiS: 670,
    tolabN: 44, tolabS: 540,
    qarzN: 11, qarzS: 130,
    xodim: 6,
    d: "M484.8,272.4L489.2,270.7L514.3,271.6L529.5,268.6L534.9,271.1L538.9,270.4L539.6,277.1L541.3,277.5L543.2,274.1L544.9,274.8L545.5,276.7L542.6,278L544.3,281.9L539.2,286.5L550.5,296L548.3,302.3L546.5,303L546,305.6L548.2,306.1L549,309.8L544.1,315.3L545.8,317.9L566.6,318.2L565.9,323.5L562.1,324.6L566.2,328.2L582.2,324.5L579.6,327.6L580.3,330.1L575.4,329.6L578.9,336.6L576.7,339.6L575.3,339.6L574.1,333L574.4,338.2L572.5,340.9L572,339L571.4,340.6L566.4,340.1L566.7,344.2L564.3,347L566,348.6L565.6,351.7L561.8,357.3L545,355.8L531.8,350.6L528.4,350.5L525.1,353.6L520.2,354.8L515.6,350.7L514.9,346.3L521.3,341.8L516,336.3L506.7,336.5L503.3,335.5L502.7,333L501.5,334.1L500.2,332.4L502.5,331L501.3,327.7L496.4,325.5L499.1,322.1L494.3,318.6L494.7,306.3L485.1,306.7L489.9,294.3L490.6,287.3L490.1,284L485.2,283.5L484.8,272.4Z",
  },
  {
    id: "syrdarya",
    n: ["Sirdaryo viloyati", "Сырдарьинская область"],
    lbl: ["Sirdaryo", "Сырдарья"],
    x: 565, y: 298, fs: 10,
    jamiN: 42, jamiS: 510,
    tolabN: 34, tolabS: 410,
    qarzN: 8, qarzS: 100,
    xodim: 4,
    d: "M545.8,317.9L566.6,318.2L565.9,323.5L581.7,320.2L588.2,321L584.3,315.3L586.1,309.4L585.6,305.2L583.9,305.4L584.9,299.8L579.3,296.2L574.3,288.4L570.3,286.9L570.5,285.2L569.2,286.1L569.9,284.4L566,280.5L567.9,279.1L565.2,276.8L561.8,277.3L560.7,279.9L564.2,282.6L564.2,294.3L566.7,295L565.8,298.5L567.5,300.1L560,301.7L550.5,296L548.3,302.3L546.5,303L546,305.6L548.2,306.1L549,309.8L544.1,315.3L545.8,317.9Z",
  },
  {
    id: "tashkent-region",
    n: ["Toshkent viloyati", "Ташкентская область"],
    lbl: ["Toshkent v.", "Ташкентская обл."],
    x: 622, y: 248, fs: 11,
    jamiN: 168, jamiS: 2100,
    tolabN: 132, tolabS: 1600,
    qarzN: 36, qarzS: 440,
    xodim: 18,
    d: "M566.5,281.5L571,279.5L569.5,276.7L573.3,272L581.3,265.5L582.5,266.3L582.2,259L587.6,257.5L589.2,253.7L593.4,254.8L595.8,252.7L600,253.2L597.6,250.8L599.5,247.8L603.8,247.4L606.7,242.3L618.8,239.6L622.2,234.4L624.3,235.9L632.1,226.9L636,225.1L635.3,221.8L637.5,220L641.9,217.8L645.1,222.5L648.3,222.9L653,213.1L656.8,213L664.2,207.6L668.6,208.2L674.1,212.5L672.2,216.2L668.9,216.4L662.9,222.1L657.6,220.8L656.4,228L649.5,228.9L646.8,233.7L643.8,234.9L642.6,239.2L633.1,245.4L630.8,245.1L629.1,250.3L632.1,251.7L634.6,250.1L642.5,256.8L638.1,264.3L640.6,264.3L640.2,270.1L643.5,273.2L637.6,278.3L637.3,284.1L627.4,288.1L624.9,291.8L613.7,294.6L610.8,298.6L608.7,298.3L601.4,288.7L598,291.9L596.6,289.8L595.5,290.7L595.5,300.9L589.9,303L592.7,305.9L595.2,313.9L593.9,317.2L591.4,316.5L593.7,322.3L588.1,321L584.3,315.3L586.1,309L585.6,305.2L583.9,305.4L585.6,301.9L583.6,301.4L585,300.2L583.8,298.1L580.8,297.8L581.5,296.4L579.3,296.2L577,290.9L570.3,286.9L570.5,285.2L569.3,286.2L569.9,284.4L566.5,281.5Z M586.3,264L590.8,256.8L597.5,258.6L595.5,261.8L597.4,265.2L592.7,267.4L592.6,269.6L588.6,268.6L587.3,263.2L586.3,264Z M590.3,265.2L591.3,266.7L594.4,265.6L590.3,265.2Z M600.4,256.4L598.8,256.8L600.4,256.4Z",
  },
  {
    id: "tashkent-city",
    n: ["Toshkent shahri", "город Ташкент"],
    lbl: ["Toshkent sh.", "г. Ташкент"],
    x: 592, y: 272, fs: 9,
    jamiN: 210, jamiS: 2600,
    tolabN: 165, tolabS: 2000,
    qarzN: 45, qarzS: 550,
    xodim: 24,
    d: "M586.3,264L590.8,256.8L597.5,258.6L595.5,261.8L597.4,265.2L592.7,267.4L592.6,269.6L588.6,268.6L587.3,263.2L586.3,264Z M590.3,265.2L591.3,266.7L594.4,265.6L590.3,265.2Z",
  },
  {
    id: "namangan",
    n: ["Namangan viloyati", "Наманганская область"],
    lbl: ["Namangan", "Наманган"],
    x: 670, y: 270, fs: 11,
    jamiN: 82, jamiS: 1000,
    tolabN: 65, tolabS: 790,
    qarzN: 17, qarzS: 210,
    xodim: 10,
    d: "M638.1,264.3L642.7,256.6L650.3,252.8L654.2,257.5L654.4,267.9L656.7,264.8L661.8,269.6L664.8,268.1L668.4,270.7L672.6,268L674.3,269.1L674.5,273.1L677.5,271.2L679.5,272.6L681.7,269.9L681.6,262.8L686.5,262.5L689.3,259.7L690.9,254.8L687.8,252.5L693.1,248.6L691.7,255.4L695.6,254.5L701.1,262.5L698.5,267.6L699.5,269.4L706.9,272.1L711.1,269.6L710.1,271.1L712.7,276.7L710.7,277.7L711.4,280.8L709.2,284.2L700.4,282.9L691.9,284.2L686.6,287.6L686.5,290.8L679.2,294.3L674.5,299.4L667.6,295.2L668.4,291.4L654.9,293.6L652,291L651.9,288.6L641.7,276.5L643.5,273.2L640.2,270.1L640.6,264.3L638.1,264.3Z M644.8,279L649.7,283.3L644.8,279Z",
  },
  {
    id: "fergana",
    n: ["Farg'ona viloyati", "Ферганская область"],
    lbl: ["Farg'ona", "Фергана"],
    x: 675, y: 312, fs: 11,
    jamiN: 95, jamiS: 1200,
    tolabN: 75, tolabS: 910,
    qarzN: 20, qarzS: 240,
    xodim: 12,
    d: "M635.8,307.7L637.7,311.6L646.1,314.2L645.9,319.8L648.1,322.8L658.8,319.9L659,315.6L674.5,313.9L675.9,315.9L683.7,317.4L686.3,320.8L688.5,321.3L688.5,318.1L690.8,317.9L692.1,321.4L690.9,321.8L693.1,324.3L697.3,321.3L697.6,318.7L702,319.6L706.3,317.4L702.7,315.2L707.8,310.6L707.7,308.1L713.2,306.3L713.8,303.1L707.9,299.1L699.5,298.4L690,292.2L687.2,298.5L683.5,292.9L686.5,290.8L679.2,294.3L674.5,299.4L667.6,295.2L668.4,291.4L662.4,291.4L654,293.8L641.9,305.5L635.8,307.7Z M663.5,328.2L663.1,322.5L665.1,322.5L668,331.3L671.3,330.5L668.7,334.7L671.8,334.8L671.5,338.1L668.9,338.7L668.1,336.5L667.3,338.8L665.8,338L667.9,332L663.5,328.2Z M693.9,333.5L695.7,331.9L698.3,333.1L697.8,335.2L695.3,334.1L693.7,335.9L692.4,334.1L693.9,333.5Z",
  },
  {
    id: "andijan",
    n: ["Andijon viloyati", "Андижанская область"],
    lbl: ["Andijon", "Андижан"],
    x: 725, y: 293, fs: 11,
    jamiN: 65, jamiS: 790,
    tolabN: 52, tolabS: 630,
    qarzN: 13, qarzS: 160,
    xodim: 11,
    d: "M686.5,290.8L683.5,292.9L687.2,298.5L690,292.2L700.2,298.7L707.9,299.1L713.8,303.1L713.2,306.3L715.5,309L721.2,310.8L722.2,306.9L719.6,304.6L721.6,303.3L718.4,299.9L721,299.1L723.6,302.7L731,304.9L731.3,300.9L735.3,301.6L736.9,295.9L738.8,296.2L739.1,294.1L744.7,291.2L750.8,290.1L751.1,287.6L745.7,286.8L742.6,289.3L738.1,286.2L728.3,285.6L726.7,280.5L718.3,275.2L711.7,278.6L709.2,284.2L700.4,282.9L691.9,284.2L686.6,287.6L686.5,290.8Z",
  },
];

/* --- Modal jadvallari — slide2.html dan ko'chirilgan namunaviy ma'lumot ---
   Tashkilot nomlari va manzillar atoqli ot bo'lgani uchun tarjima qilinmaydi;
   faqat ustun sarlavhalari ikki tilda (js/content.js dagi tblH). */

const PLAT_CONTRACTS = {
  "jami": [
    {
      "raqam": "SH-2025-001",
      "sana": "10.01.2025",
      "bajaruvchi": "Toshkent viloyati",
      "buyurtmachi": "Humo Arena",
      "soat": "14:00 - 22:00",
      "summa": "450,000,000",
      "xodim": 120,
      "manzil": "Toshkent sh., Bunyodkor ko'chasi 1"
    },
    {
      "raqam": "SH-2025-002",
      "sana": "15.01.2025",
      "bajaruvchi": "Samarqand viloyati",
      "buyurtmachi": "Registon maydoni",
      "soat": "10:00 - 18:00",
      "summa": "320,000,000",
      "xodim": 85,
      "manzil": "Samarqand sh., Registon maydoni"
    },
    {
      "raqam": "SH-2025-003",
      "sana": "22.01.2025",
      "bajaruvchi": "Farg'ona viloyati",
      "buyurtmachi": "Farg'ona stadioni",
      "soat": "16:00 - 23:00",
      "summa": "280,000,000",
      "xodim": 95,
      "manzil": "Farg'ona sh., Mustaqillik ko'chasi 45"
    },
    {
      "raqam": "SH-2025-004",
      "sana": "03.02.2025",
      "bajaruvchi": "Buxoro viloyati",
      "buyurtmachi": "Ark qal'asi",
      "soat": "09:00 - 17:00",
      "summa": "190,000,000",
      "xodim": 60,
      "manzil": "Buxoro sh., Ark qal'asi"
    },
    {
      "raqam": "SH-2025-005",
      "sana": "14.02.2025",
      "bajaruvchi": "Andijon viloyati",
      "buyurtmachi": "Bobur bog'i",
      "soat": "11:00 - 19:00",
      "summa": "210,000,000",
      "xodim": 70,
      "manzil": "Andijon sh., Bobur ko'chasi 12"
    },
    {
      "raqam": "SH-2025-006",
      "sana": "28.02.2025",
      "bajaruvchi": "Namangan viloyati",
      "buyurtmachi": "Namangan Arena",
      "soat": "15:00 - 22:00",
      "summa": "350,000,000",
      "xodim": 110,
      "manzil": "Namangan sh., Navoi ko'chasi 8"
    },
    {
      "raqam": "SH-2025-007",
      "sana": "05.03.2025",
      "bajaruvchi": "Qashqadaryo viloyati",
      "buyurtmachi": "Shahrisabz saroyii",
      "soat": "10:00 - 16:00",
      "summa": "175,000,000",
      "xodim": 55,
      "manzil": "Shahrisabz sh., Amir Temur ko'chasi"
    },
    {
      "raqam": "SH-2025-008",
      "sana": "12.03.2025",
      "bajaruvchi": "Xorazm viloyati",
      "buyurtmachi": "Ichan Qal'a",
      "soat": "08:00 - 20:00",
      "summa": "260,000,000",
      "xodim": 80,
      "manzil": "Xiva sh., Ichan Qal'a"
    },
    {
      "raqam": "SH-2025-009",
      "sana": "20.03.2025",
      "bajaruvchi": "Navoiy viloyati",
      "buyurtmachi": "Navoiy shahri markaziy maydoni",
      "soat": "12:00 - 20:00",
      "summa": "145,000,000",
      "xodim": 45,
      "manzil": "Navoiy sh., Markaziy maydon"
    },
    {
      "raqam": "SH-2025-010",
      "sana": "01.04.2025",
      "bajaruvchi": "Surxondaryo viloyati",
      "buyurtmachi": "Termiz amfiteatri",
      "soat": "13:00 - 21:00",
      "summa": "160,000,000",
      "xodim": 50,
      "manzil": "Termiz sh., Firdavsiy ko'chasi 3"
    },
    {
      "raqam": "SH-2025-021",
      "sana": "05.07.2025",
      "bajaruvchi": "Jizzax viloyati",
      "buyurtmachi": "Jizzax viloyat hokimligi",
      "soat": "10:00 - 18:00",
      "summa": "195,000,000",
      "xodim": 65,
      "manzil": "Jizzax sh., Sharof Rashidov ko'chasi 1"
    },
    {
      "raqam": "SH-2025-022",
      "sana": "12.07.2025",
      "bajaruvchi": "Sirdaryo viloyati",
      "buyurtmachi": "Guliston ko'ngilochar markazi",
      "soat": "16:00 - 23:00",
      "summa": "110,000,000",
      "xodim": 35,
      "manzil": "Guliston sh., Bog'iston ko'chasi 7"
    },
    {
      "raqam": "SH-2025-027",
      "sana": "20.07.2025",
      "bajaruvchi": "Toshkent shahri",
      "buyurtmachi": "Tashkent City Arena",
      "soat": "18:00 - 23:00",
      "summa": "680,000,000",
      "xodim": 200,
      "manzil": "Toshkent sh., Amir Temur ko'chasi 100"
    },
    {
      "raqam": "SH-2025-028",
      "sana": "25.07.2025",
      "bajaruvchi": "Qoraqalpog'iston",
      "buyurtmachi": "Nukus sport kompleksi",
      "soat": "09:00 - 17:00",
      "summa": "135,000,000",
      "xodim": 40,
      "manzil": "Nukus sh., Sport ko'chasi 5"
    },
    {
      "raqam": "SH-2025-029",
      "sana": "01.08.2025",
      "bajaruvchi": "Andijon viloyati",
      "buyurtmachi": "Andijon shahri parki",
      "soat": "10:00 - 20:00",
      "summa": "175,000,000",
      "xodim": 55,
      "manzil": "Andijon sh., Park ko'chasi 3"
    },
    {
      "raqam": "SH-2025-030",
      "sana": "08.08.2025",
      "bajaruvchi": "Namangan viloyati",
      "buyurtmachi": "Pop tumani festivali",
      "soat": "08:00 - 18:00",
      "summa": "125,000,000",
      "xodim": 45,
      "manzil": "Pop t., Markaziy ko'cha 1"
    },
    {
      "raqam": "SH-2025-031",
      "sana": "15.08.2025",
      "bajaruvchi": "Samarqand viloyati",
      "buyurtmachi": "Ulug'bek rasadxonasi",
      "soat": "11:00 - 19:00",
      "summa": "240,000,000",
      "xodim": 70,
      "manzil": "Samarqand sh., Ulug'bek ko'chasi 15"
    },
    {
      "raqam": "SH-2025-032",
      "sana": "22.08.2025",
      "bajaruvchi": "Farg'ona viloyati",
      "buyurtmachi": "Marg'ilon ipak festivali",
      "soat": "09:00 - 21:00",
      "summa": "310,000,000",
      "xodim": 95,
      "manzil": "Marg'ilon sh., Ipak yo'li ko'chasi 8"
    },
    {
      "raqam": "SH-2025-033",
      "sana": "28.08.2025",
      "bajaruvchi": "Buxoro viloyati",
      "buyurtmachi": "Buxoro ipak karvon festivali",
      "soat": "10:00 - 22:00",
      "summa": "285,000,000",
      "xodim": 85,
      "manzil": "Buxoro sh., Lyabi Hovuz maydoni"
    },
    {
      "raqam": "SH-2025-034",
      "sana": "01.09.2025",
      "bajaruvchi": "Toshkent viloyati",
      "buyurtmachi": "Mustaqillik bayrami",
      "soat": "08:00 - 23:00",
      "summa": "920,000,000",
      "xodim": 300,
      "manzil": "Toshkent sh., Mustaqillik maydoni"
    }
  ],
  "tolab": [
    {
      "raqam": "SH-2025-001",
      "sana": "10.01.2025",
      "bajaruvchi": "Toshkent viloyati",
      "buyurtmachi": "Humo Arena",
      "soat": "14:00 - 22:00",
      "summa": "450,000,000",
      "xodim": 120,
      "manzil": "Toshkent sh., Bunyodkor ko'chasi 1"
    },
    {
      "raqam": "SH-2025-002",
      "sana": "15.01.2025",
      "bajaruvchi": "Samarqand viloyati",
      "buyurtmachi": "Registon maydoni",
      "soat": "10:00 - 18:00",
      "summa": "320,000,000",
      "xodim": 85,
      "manzil": "Samarqand sh., Registon maydoni"
    },
    {
      "raqam": "SH-2025-003",
      "sana": "22.01.2025",
      "bajaruvchi": "Farg'ona viloyati",
      "buyurtmachi": "Farg'ona stadioni",
      "soat": "16:00 - 23:00",
      "summa": "280,000,000",
      "xodim": 95,
      "manzil": "Farg'ona sh., Mustaqillik ko'chasi 45"
    },
    {
      "raqam": "SH-2025-005",
      "sana": "14.02.2025",
      "bajaruvchi": "Andijon viloyati",
      "buyurtmachi": "Bobur bog'i",
      "soat": "11:00 - 19:00",
      "summa": "210,000,000",
      "xodim": 70,
      "manzil": "Andijon sh., Bobur ko'chasi 12"
    },
    {
      "raqam": "SH-2025-006",
      "sana": "28.02.2025",
      "bajaruvchi": "Namangan viloyati",
      "buyurtmachi": "Namangan Arena",
      "soat": "15:00 - 22:00",
      "summa": "350,000,000",
      "xodim": 110,
      "manzil": "Namangan sh., Navoi ko'chasi 8"
    },
    {
      "raqam": "SH-2025-008",
      "sana": "12.03.2025",
      "bajaruvchi": "Xorazm viloyati",
      "buyurtmachi": "Ichan Qal'a",
      "soat": "08:00 - 20:00",
      "summa": "260,000,000",
      "xodim": 80,
      "manzil": "Xiva sh., Ichan Qal'a"
    },
    {
      "raqam": "SH-2025-011",
      "sana": "08.04.2025",
      "bajaruvchi": "Jizzax viloyati",
      "buyurtmachi": "Jizzax sport majmuasi",
      "soat": "10:00 - 18:00",
      "summa": "185,000,000",
      "xodim": 65,
      "manzil": "Jizzax sh., Sport ko'chasi 15"
    },
    {
      "raqam": "SH-2025-012",
      "sana": "15.04.2025",
      "bajaruvchi": "Sirdaryo viloyati",
      "buyurtmachi": "Guliston madaniyat saroyi",
      "soat": "14:00 - 20:00",
      "summa": "130,000,000",
      "xodim": 40,
      "manzil": "Guliston sh., Mustaqillik ko'chasi 22"
    },
    {
      "raqam": "SH-2025-013",
      "sana": "22.04.2025",
      "bajaruvchi": "Toshkent shahri",
      "buyurtmachi": "Milliy bog'",
      "soat": "09:00 - 21:00",
      "summa": "520,000,000",
      "xodim": 150,
      "manzil": "Toshkent sh., Navoi ko'chasi 30"
    },
    {
      "raqam": "SH-2025-014",
      "sana": "01.05.2025",
      "bajaruvchi": "Toshkent shahri",
      "buyurtmachi": "Muz saroyii",
      "soat": "18:00 - 23:00",
      "summa": "380,000,000",
      "xodim": 100,
      "manzil": "Toshkent sh., Shota Rustaveli ko'chasi 8"
    },
    {
      "raqam": "SH-2025-023",
      "sana": "08.05.2025",
      "bajaruvchi": "Samarqand viloyati",
      "buyurtmachi": "Samarqand arena",
      "soat": "12:00 - 20:00",
      "summa": "290,000,000",
      "xodim": 90,
      "manzil": "Samarqand sh., Registon ko'chasi 15"
    },
    {
      "raqam": "SH-2025-024",
      "sana": "15.05.2025",
      "bajaruvchi": "Buxoro viloyati",
      "buyurtmachi": "Buxoro turizm markazi",
      "soat": "09:00 - 17:00",
      "summa": "165,000,000",
      "xodim": 50,
      "manzil": "Buxoro sh., Naqshband ko'chasi 3"
    },
    {
      "raqam": "SH-2025-035",
      "sana": "20.05.2025",
      "bajaruvchi": "Qashqadaryo viloyati",
      "buyurtmachi": "Qarshi shahri konsert zali",
      "soat": "17:00 - 22:00",
      "summa": "220,000,000",
      "xodim": 70,
      "manzil": "Qarshi sh., Mustaqillik ko'chasi 30"
    },
    {
      "raqam": "SH-2025-036",
      "sana": "28.05.2025",
      "bajaruvchi": "Surxondaryo viloyati",
      "buyurtmachi": "Termiz arxeologiya muzeyi",
      "soat": "10:00 - 18:00",
      "summa": "145,000,000",
      "xodim": 45,
      "manzil": "Termiz sh., Muzey ko'chasi 2"
    },
    {
      "raqam": "SH-2025-037",
      "sana": "05.06.2025",
      "bajaruvchi": "Toshkent shahri",
      "buyurtmachi": "Toshkent teleminorasi bayrami",
      "soat": "14:00 - 23:00",
      "summa": "480,000,000",
      "xodim": 140,
      "manzil": "Toshkent sh., Amir Temur ko'chasi 109"
    },
    {
      "raqam": "SH-2025-038",
      "sana": "12.06.2025",
      "bajaruvchi": "Navoiy viloyati",
      "buyurtmachi": "Zarafshon kon festivali",
      "soat": "09:00 - 17:00",
      "summa": "155,000,000",
      "xodim": 50,
      "manzil": "Zarafshon sh., Konchilar ko'chasi 1"
    },
    {
      "raqam": "SH-2025-039",
      "sana": "18.06.2025",
      "bajaruvchi": "Xorazm viloyati",
      "buyurtmachi": "Urganch madaniyat saroyi",
      "soat": "15:00 - 22:00",
      "summa": "190,000,000",
      "xodim": 60,
      "manzil": "Urganch sh., Al-Xorazmiy ko'chasi 5"
    },
    {
      "raqam": "SH-2025-040",
      "sana": "25.06.2025",
      "bajaruvchi": "Toshkent viloyati",
      "buyurtmachi": "Angren shahri sport festivali",
      "soat": "10:00 - 20:00",
      "summa": "170,000,000",
      "xodim": 55,
      "manzil": "Angren sh., Yoshlik ko'chasi 12"
    },
    {
      "raqam": "SH-2025-041",
      "sana": "02.07.2025",
      "bajaruvchi": "Farg'ona viloyati",
      "buyurtmachi": "Qo'qon xonligi festivali",
      "soat": "11:00 - 21:00",
      "summa": "265,000,000",
      "xodim": 80,
      "manzil": "Qo'qon sh., Xonlik ko'chasi 1"
    },
    {
      "raqam": "SH-2025-042",
      "sana": "10.07.2025",
      "bajaruvchi": "Andijon viloyati",
      "buyurtmachi": "Asaka avtomobil zavodi",
      "soat": "12:00 - 18:00",
      "summa": "135,000,000",
      "xodim": 40,
      "manzil": "Asaka sh., Sanoat ko'chasi 10"
    }
  ],
  "qarz": [
    {
      "raqam": "SH-2025-004",
      "sana": "03.02.2025",
      "bajaruvchi": "Buxoro viloyati",
      "buyurtmachi": "Ark qal'asi",
      "soat": "09:00 - 17:00",
      "summa": "190,000,000",
      "xodim": 60,
      "manzil": "Buxoro sh., Ark qal'asi"
    },
    {
      "raqam": "SH-2025-007",
      "sana": "05.03.2025",
      "bajaruvchi": "Qashqadaryo viloyati",
      "buyurtmachi": "Shahrisabz saroyii",
      "soat": "10:00 - 16:00",
      "summa": "175,000,000",
      "xodim": 55,
      "manzil": "Shahrisabz sh., Amir Temur ko'chasi"
    },
    {
      "raqam": "SH-2025-009",
      "sana": "20.03.2025",
      "bajaruvchi": "Navoiy viloyati",
      "buyurtmachi": "Navoiy shahri markaziy maydoni",
      "soat": "12:00 - 20:00",
      "summa": "145,000,000",
      "xodim": 45,
      "manzil": "Navoiy sh., Markaziy maydon"
    },
    {
      "raqam": "SH-2025-010",
      "sana": "01.04.2025",
      "bajaruvchi": "Surxondaryo viloyati",
      "buyurtmachi": "Termiz amfiteatri",
      "soat": "13:00 - 21:00",
      "summa": "160,000,000",
      "xodim": 50,
      "manzil": "Termiz sh., Firdavsiy ko'chasi 3"
    },
    {
      "raqam": "SH-2025-015",
      "sana": "10.05.2025",
      "bajaruvchi": "Qoraqalpog'iston",
      "buyurtmachi": "Nukus san'at muzeyi",
      "soat": "10:00 - 17:00",
      "summa": "120,000,000",
      "xodim": 35,
      "manzil": "Nukus sh., Karakalpakiston ko'chasi 127"
    },
    {
      "raqam": "SH-2025-016",
      "sana": "18.05.2025",
      "bajaruvchi": "Toshkent viloyati",
      "buyurtmachi": "Chirchiq sport majmuasi",
      "soat": "15:00 - 22:00",
      "summa": "95,000,000",
      "xodim": 30,
      "manzil": "Chirchiq sh., Amir Temur ko'chasi 5"
    },
    {
      "raqam": "SH-2025-017",
      "sana": "25.05.2025",
      "bajaruvchi": "Samarqand viloyati",
      "buyurtmachi": "Afrosiyob saroyi",
      "soat": "11:00 - 19:00",
      "summa": "230,000,000",
      "xodim": 75,
      "manzil": "Samarqand sh., Afrosiyob ko'chasi 1"
    },
    {
      "raqam": "SH-2025-018",
      "sana": "02.06.2025",
      "bajaruvchi": "Farg'ona viloyati",
      "buyurtmachi": "Quva madaniyat uyi",
      "soat": "14:00 - 20:00",
      "summa": "85,000,000",
      "xodim": 25,
      "manzil": "Quva sh., Markaziy ko'cha 10"
    },
    {
      "raqam": "SH-2025-019",
      "sana": "10.06.2025",
      "bajaruvchi": "Andijon viloyati",
      "buyurtmachi": "Andijon viloyat stadioni",
      "soat": "17:00 - 23:00",
      "summa": "310,000,000",
      "xodim": 90,
      "manzil": "Andijon sh., Stadion ko'chasi 1"
    },
    {
      "raqam": "SH-2025-020",
      "sana": "20.06.2025",
      "bajaruvchi": "Namangan viloyati",
      "buyurtmachi": "Chortoq dam olish maskani",
      "soat": "08:00 - 18:00",
      "summa": "140,000,000",
      "xodim": 40,
      "manzil": "Chortoq t., Tabiat ko'chasi 5"
    },
    {
      "raqam": "SH-2025-025",
      "sana": "28.06.2025",
      "bajaruvchi": "Xorazm viloyati",
      "buyurtmachi": "Xiva turizm festivali",
      "soat": "10:00 - 22:00",
      "summa": "275,000,000",
      "xodim": 85,
      "manzil": "Xiva sh., Muhammad Rahim Xon ko'chasi"
    },
    {
      "raqam": "SH-2025-026",
      "sana": "05.07.2025",
      "bajaruvchi": "Toshkent viloyati",
      "buyurtmachi": "Olmaliq metallurgiya zavodii",
      "soat": "14:00 - 20:00",
      "summa": "180,000,000",
      "xodim": 55,
      "manzil": "Olmaliq sh., Sanoat ko'chasi 12"
    },
    {
      "raqam": "SH-2025-043",
      "sana": "12.07.2025",
      "bajaruvchi": "Jizzax viloyati",
      "buyurtmachi": "Zomin tog' festivali",
      "soat": "08:00 - 18:00",
      "summa": "165,000,000",
      "xodim": 50,
      "manzil": "Zomin t., Tabiat ko'chasi 1"
    },
    {
      "raqam": "SH-2025-044",
      "sana": "18.07.2025",
      "bajaruvchi": "Sirdaryo viloyati",
      "buyurtmachi": "Baxt shaharchasi bayrami",
      "soat": "14:00 - 22:00",
      "summa": "95,000,000",
      "xodim": 30,
      "manzil": "Guliston sh., Baxt ko'chasi 5"
    },
    {
      "raqam": "SH-2025-045",
      "sana": "25.07.2025",
      "bajaruvchi": "Toshkent shahri",
      "buyurtmachi": "Milliy stadion konsert",
      "soat": "18:00 - 23:00",
      "summa": "520,000,000",
      "xodim": 160,
      "manzil": "Toshkent sh., Furqat ko'chasi 1"
    },
    {
      "raqam": "SH-2025-046",
      "sana": "01.08.2025",
      "bajaruvchi": "Samarqand viloyati",
      "buyurtmachi": "Samarqand shoyi festivali",
      "soat": "10:00 - 20:00",
      "summa": "340,000,000",
      "xodim": 100,
      "manzil": "Samarqand sh., Shoyi bozor ko'chasi"
    },
    {
      "raqam": "SH-2025-047",
      "sana": "08.08.2025",
      "bajaruvchi": "Namangan viloyati",
      "buyurtmachi": "Namangan gullar festivali",
      "soat": "09:00 - 19:00",
      "summa": "195,000,000",
      "xodim": 60,
      "manzil": "Namangan sh., Gullar ko'chasi 7"
    },
    {
      "raqam": "SH-2025-048",
      "sana": "15.08.2025",
      "bajaruvchi": "Farg'ona viloyati",
      "buyurtmachi": "Rishton kulolchilik festivali",
      "soat": "10:00 - 18:00",
      "summa": "145,000,000",
      "xodim": 45,
      "manzil": "Rishton sh., Kulollar ko'chasi 3"
    },
    {
      "raqam": "SH-2025-049",
      "sana": "22.08.2025",
      "bajaruvchi": "Buxoro viloyati",
      "buyurtmachi": "Buxoro oltin kuz festivali",
      "soat": "11:00 - 21:00",
      "summa": "280,000,000",
      "xodim": 80,
      "manzil": "Buxoro sh., Ismoil Samoniy ko'chasi"
    },
    {
      "raqam": "SH-2025-050",
      "sana": "28.08.2025",
      "bajaruvchi": "Qashqadaryo viloyati",
      "buyurtmachi": "Kitob rasdxonasi bayrami",
      "soat": "09:00 - 17:00",
      "summa": "110,000,000",
      "xodim": 35,
      "manzil": "Kitob sh., Ulug'bek ko'chasi 1"
    }
  ]
};

const PLAT_STAFF = [
  {
    "ism": "Abdullayev Sherzod",
    "hudud": "Toshkent shahri",
    "batalon": "89071-batalon",
    "lavozim": "Katta leytenant",
    "tadbir": 24,
    "soat": 256,
    "kun": 28,
    "farq": 47
  },
  {
    "ism": "Karimov Jasur",
    "hudud": "Toshkent shahri",
    "batalon": "89071-batalon",
    "lavozim": "Mayor",
    "tadbir": 21,
    "soat": 234,
    "kun": 25,
    "farq": 42
  },
  {
    "ism": "Raximov Bobur",
    "hudud": "Toshkent viloyati",
    "batalon": "89052-batalon",
    "lavozim": "Kapitan",
    "tadbir": 20,
    "soat": 228,
    "kun": 24,
    "farq": 40
  },
  {
    "ism": "Toshmatov Dilshod",
    "hudud": "Samarqand viloyati",
    "batalon": "89034-batalon",
    "lavozim": "Katta leytenant",
    "tadbir": 19,
    "soat": 215,
    "kun": 22,
    "farq": 38
  },
  {
    "ism": "Normatov Eldor",
    "hudud": "Farg'ona viloyati",
    "batalon": "89045-batalon",
    "lavozim": "Leytenant",
    "tadbir": 18,
    "soat": 204,
    "kun": 21,
    "farq": 36
  },
  {
    "ism": "Xasanov Sardor",
    "hudud": "Toshkent shahri",
    "batalon": "89071-batalon",
    "lavozim": "Mayor",
    "tadbir": 17,
    "soat": 195,
    "kun": 20,
    "farq": 35
  },
  {
    "ism": "Yusupov Aziz",
    "hudud": "Andijon viloyati",
    "batalon": "89038-batalon",
    "lavozim": "Kapitan",
    "tadbir": 16,
    "soat": 188,
    "kun": 19,
    "farq": 33
  },
  {
    "ism": "Mirzayev Otabek",
    "hudud": "Namangan viloyati",
    "batalon": "89041-batalon",
    "lavozim": "Katta leytenant",
    "tadbir": 15,
    "soat": 182,
    "kun": 18,
    "farq": 32
  },
  {
    "ism": "Sobirov Baxtiyor",
    "hudud": "Buxoro viloyati",
    "batalon": "89027-batalon",
    "lavozim": "Leytenant",
    "tadbir": 15,
    "soat": 176,
    "kun": 17,
    "farq": 31
  },
  {
    "ism": "Ergashev Nodir",
    "hudud": "Qashqadaryo viloyati",
    "batalon": "89063-batalon",
    "lavozim": "Kapitan",
    "tadbir": 14,
    "soat": 170,
    "kun": 16,
    "farq": 30
  },
  {
    "ism": "Jumayev Bekzod",
    "hudud": "Jizzax viloyati",
    "batalon": "89056-batalon",
    "lavozim": "Katta leytenant",
    "tadbir": 14,
    "soat": 165,
    "kun": 15,
    "farq": 30
  },
  {
    "ism": "Tursunov Farrux",
    "hudud": "Toshkent viloyati",
    "batalon": "89052-batalon",
    "lavozim": "Leytenant",
    "tadbir": 13,
    "soat": 160,
    "kun": 15,
    "farq": 30
  },
  {
    "ism": "Umarov Rustam",
    "hudud": "Surxondaryo viloyati",
    "batalon": "89074-batalon",
    "lavozim": "Mayor",
    "tadbir": 13,
    "soat": 158,
    "kun": 14,
    "farq": 30
  },
  {
    "ism": "Qodirov Alisher",
    "hudud": "Xorazm viloyati",
    "batalon": "89029-batalon",
    "lavozim": "Kapitan",
    "tadbir": 12,
    "soat": 155,
    "kun": 14,
    "farq": 30
  },
  {
    "ism": "Rahimov Sanjar",
    "hudud": "Toshkent shahri",
    "batalon": "89071-batalon",
    "lavozim": "Katta leytenant",
    "tadbir": 12,
    "soat": 150,
    "kun": 13,
    "farq": 30
  },
  {
    "ism": "Nazarov Dostonbek",
    "hudud": "Navoiy viloyati",
    "batalon": "89048-batalon",
    "lavozim": "Leytenant",
    "tadbir": 11,
    "soat": 148,
    "kun": 13,
    "farq": 30
  },
  {
    "ism": "Ismoilov Javohir",
    "hudud": "Farg'ona viloyati",
    "batalon": "89045-batalon",
    "lavozim": "Mayor",
    "tadbir": 11,
    "soat": 145,
    "kun": 12,
    "farq": 30
  },
  {
    "ism": "Botirov Ulug'bek",
    "hudud": "Samarqand viloyati",
    "batalon": "89034-batalon",
    "lavozim": "Kapitan",
    "tadbir": 10,
    "soat": 142,
    "kun": 12,
    "farq": 30
  },
  {
    "ism": "Zokirov Jamshid",
    "hudud": "Andijon viloyati",
    "batalon": "89038-batalon",
    "lavozim": "Katta leytenant",
    "tadbir": 10,
    "soat": 140,
    "kun": 11,
    "farq": 30
  },
  {
    "ism": "Hamidov Shuxrat",
    "hudud": "Buxoro viloyati",
    "batalon": "89027-batalon",
    "lavozim": "Leytenant",
    "tadbir": 10,
    "soat": 138,
    "kun": 11,
    "farq": 30
  },
  {
    "ism": "Salimov Otabek",
    "hudud": "Namangan viloyati",
    "batalon": "89041-batalon",
    "lavozim": "Kapitan",
    "tadbir": 9,
    "soat": 135,
    "kun": 10,
    "farq": 30
  }
];

/* Xodimning ishlab topgan puli: soat * soatlik * ulush */
const PLAT_HOURLY = 28840;
const PLAT_SHARE_STAFF = 0.25;
