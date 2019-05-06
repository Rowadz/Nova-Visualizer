import { TreeSubejct } from '../models/tree-subject.model';

export const CS2012: Array<TreeSubejct> = [
  { cid: '250101', name: 'تفاضل وتكامل', lvl: 1, credit: 3 },
  { cid: '0750113', name: 'اساسيات البرمجه 1', lvl: 1, credit: 3 },
  { cid: '0250104', name: 'الهياكل المتقطعة', lvl: 1, credit: 3 },
  {
    cid: '0731110',
    name: 'مقدمة في نظم و تكنولوجيا المعلومات',
    lvl: 1,
    credit: 3
  },
  { cid: '0721110', name: 'مقدمة في هندسة البرمجيات', lvl: 1, credit: 3 },
  {
    cid: '0750114',
    name: 'اساسيات البرمجه 2',
    lvl: 1,
    dependsOn: ['0750113'],
    credit: 3
  },
  {
    cid: '0750272',
    name: 'التحليل العددي',
    lvl: 2,
    dependsOn: ['250101'],
    credit: 3
  },
  {
    cid: '0721220',
    name: 'برمجه الفاهيم الشيئية',
    lvl: 2,
    dependsOn: ['0750114'],
    credit: 3
  },
  {
    cid: '0731213',
    name: 'مقدمة في برمجة المواقع اإللكترونية',
    lvl: 2,
    dependsOn: ['0750114'],
    credit: 3
  },

  {
    cid: '0750223',
    name: 'نظرية الحسابات',
    lvl: 2,
    dependsOn: ['0250104'],
    credit: 3
  },
  {
    cid: '0721240',
    name: 'أخالقيات الحوسبة',
    lvl: 2,
    dependsOn: ['0731110'],
    credit: 3
  },
  { cid: '0750231', name: 'تصميم دوائر المنطق', lvl: 2, credit: 3 },
  {
    cid: '0761220',
    name: 'البرمجة المرئية',
    lvl: 2,
    dependsOn: ['0721220'],
    credit: 3
  },
  {
    cid: '0761235',
    name: 'أساسيات قواعد البيانات',
    lvl: 2,
    dependsOn: ['0721220'],
    credit: 3
  },
  { cid: '0250231', name: 'مبادئ الإحصاء و الإحتمالات', lvl: 2 },
  {
    cid: '0721221',
    name: 'تراكيب البيانات الشيئية',
    lvl: 2,
    dependsOn: ['0250104', '0721220'],
    credit: 3
  },
  {
    cid: '0750233',
    name: 'تصميم وتنظيم الحاسبات',
    lvl: 2,
    dependsOn: ['0750231'],
    credit: 3
  },

  {
    cid: '0750322',
    name: 'تصميم وتحليل الخوارزميات',
    lvl: 3,
    dependsOn: ['0750272', '0721221'],
    credit: 3
  },
  {
    cid: '0750362',
    name: 'برمجة تطبيقات قواعد البيانات',
    lvl: 3,
    dependsOn: ['0761235'],
    credit: 3
  },
  {
    cid: '0761340',
    name: 'أساسيات شبكات الحاسوب',
    lvl: 3,
    dependsOn: ['0721221'],
    credit: 3
  },
  {
    cid: '0750350',
    name: 'األنظمة الذكية',
    lvl: 3,
    dependsOn: ['0721221', '0250231'],
    credit: 3
  },
  {
    cid: '0750321',
    name: 'مفاهيم لغات البرمجة',
    lvl: 3,
    dependsOn: ['0721221'],
    credit: 3
  },
  {
    cid: '0750324',
    name: 'بناء المترجمات',
    lvl: 3,
    dependsOn: ['0750223'],
    credit: 3
  },
  { cid: '0750399', name: 'التدريب العملي', lvl: 3, credit: 0 },
  {
    cid: '0750332',
    name: 'معمارية الحاسوب',
    lvl: 3,
    dependsOn: ['0750233', '0731110'],
    credit: 3
  },
  {
    cid: '0731321',
    name: 'تحليل وتصميم النظم',
    lvl: 3,
    dependsOn: ['0721110'],
    credit: 3
  },
  {
    cid: '0750333',
    name: 'مبادئ نظم التشغيل',
    lvl: 3,
    dependsOn: ['0750332'],
    credit: 3
  },

  {
    cid: '0750474',
    name: 'معالجة الصور الرقمية*',
    lvl: 4,
    dependsOn: ['0750322'],
    optional: true,
    credit: 3
  },
  {
    cid: '0750472',
    name: 'النمذجة والمحاكاة ',
    lvl: 4,
    dependsOn: ['0750272'],
    credit: 3
  },
  {
    cid: '0750413',
    name: 'البرمجة المتوازنة والموزعة',
    lvl: 4,
    dependsOn: ['0761220'],
    credit: 3
  },
  {
    cid: '0761430',
    name: ' استرجاع المعلومات*',
    lvl: 4,
    dependsOn: ['0761235'],
    optional: true,
    credit: 3
  },
  {
    cid: '0761434',
    name: 'مستودعات البيانات و التنقيب عن البيانات*',
    lvl: 4,
    dependsOn: ['0761235'],
    optional: true,
    credit: 3
  },
  {
    cid: '0750444',
    name: 'حماية المعلومات وشبكات الحاسوب',
    lvl: 4,
    dependsOn: ['0761340'],
    credit: 3
  },
  {
    cid: '0761441',
    name: 'الشبكات الاسلكيه و المتنقلة',
    lvl: 4,
    dependsOn: ['0761340'],
    credit: 3
  },
  { cid: '0750497', name: 'مشروع بحث 1', lvl: 4, credit: 1 },
  { cid: '0750498', name: 'مشروع بحث 2', lvl: 4, credit: 2 },
  {
    cid: '0750434',
    name: 'نظم التشغيل المتقدمة',
    lvl: 4,
    dependsOn: ['0750333'],
    credit: 3
  },
  { cid: '0750460', name: 'موضوعات خاصة*', lvl: 4, optional: true, credit: 3 }
];