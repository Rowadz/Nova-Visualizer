import { TreeSubejct } from '../models/tree-subject.model';

export const SE2012: Array<TreeSubejct> = [
  {
    cid: '0731110',
    name: 'مقدمة في نظم وتكنولوجيا المعلومات ',
    lvl: 1,
    credit: 3
  },
  { cid: '0750113', name: 'أساسيات البرمجه 1', lvl: 1, credit: 3 },
  { cid: '0250101', name: 'تفاضل وتكامل', lvl: 1, credit: 3 },
  {
    cid: '0750114',
    name: 'أساسيات البرمجه 2',
    lvl: 1,
    dependsOn: ['0750113'],
    credit: 3
  },
  { cid: '0250104', name: 'الهياكل المتقطعة', lvl: 1, credit: 3 },
  {
    cid: '0721110',
    name: 'مقدمة في هندسة البرمجيات',
    lvl: 1,
    dependsOn: ['0731110', '0750113'],
    credit: 3
  },
  { cid: '0130102', name: 'مهارات اللغة اإلنجليزية 2', lvl: 1, credit: 3 },
  {
    cid: '0750231',
    name: 'تصميم دوائر المنطق',
    lvl: 2,
    dependsOn: ['0731110'],
    credit: 3
  },
  {
    cid: '0721230',
    name: 'متطلبات البرمجيات',
    lvl: 2,
    dependsOn: ['0721110'],
    credit: 3
  },
  {
    cid: '0721240',
    name: 'أخالقيات الحوسبة',
    lvl: 2,
    dependsOn: ['0731110'],
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
    cid: '0721220',
    name: 'برمجة المفاهيم الشيئية ',
    lvl: 2,
    dependsOn: ['0750114'],
    credit: 3
  },
  {
    cid: '0750272',
    name: 'التحليل العددي',
    lvl: 2,
    dependsOn: ['0250101', '0750114'],
    credit: 3
  },
  { cid: '0250231', name: 'مبادئ اإلحصاء واإلحتماالت', lvl: 2, credit: 3 },
  {
    cid: '0721222',
    name: 'نمذجة البرمجيات',
    lvl: 2,
    dependsOn: ['0721110'],
    credit: 3
  },
  {
    cid: '0761220',
    name: 'البرمجة المرئية',
    lvl: 2,
    dependsOn: ['0721220'],
    credit: 3
  },
  {
    cid: '0721221',
    name: 'تراكيب البيانات الشيئية',
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
  {
    cid: '0750332',
    name: 'معمارية الحاسوب',
    lvl: 3,
    dependsOn: ['0750231'],
    credit: 3
  },
  {
    cid: '0721330',
    name: 'إنتاج البرمجيات',
    lvl: 3,
    dependsOn: ['0721222'],
    credit: 3
  },
  {
    cid: '0721320',
    name: 'معمارية البرمجيات',
    lvl: 3,
    dependsOn: ['0721222'],
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
    cid: '0721331',
    name: 'إدارة مشاريع البرمجيات',
    lvl: 3,
    dependsOn: ['0721330'],
    credit: 3
  },
  {
    cid: '0721322',
    name: 'تحليل وتصميم النظم',
    lvl: 3,
    dependsOn: ['0721320'],
    credit: 3
  },
  {
    cid: '0761340',
    name: 'ساسيات شبكات الحاسوب',
    lvl: 3,
    dependsOn: ['0721221'],
    credit: 3
  },
  {
    cid: '0750322',
    name: 'تصميم وتحليل الخوارزميات',
    lvl: 3,
    dependsOn: ['0721221', '0250231'],
    credit: 3
  },
  {
    cid: '0721324',
    name: 'برمجة المفاهيم الشيئية المتقدمة',
    lvl: 3,
    dependsOn: ['0721220'],
    credit: 3
  },
  { cid: '0721430', name: 'إختبار البرمجيات', lvl: 4, dependsOn: ['0721322'] },
  {
    cid: '0721420',
    name: 'بناء البرمجيات وتطويرها',
    lvl: 4,
    dependsOn: ['0721322'],
    credit: 3
  },
  {
    cid: '0721439',
    name: '* موضوعات خاصة في هندسة البرمجيات',
    lvl: 4,
    dependsOn: ['0721322'],
    optional: true,
    credit: 3
  },
  {
    cid: '0721443',
    name: '* تصميم برمجيات الإتصالات',
    lvl: 4,
    dependsOn: ['0761340', '0721322'],
    optional: true,
    credit: 3
  },
  { cid: '0721448', name: 'مشروع بحث 1', lvl: 4, credit: 1 },
  {
    cid: '0721447',
    name: '* النمذجة المتقدمة للبرمجيات',
    lvl: 4,
    dependsOn: ['0721420'],
    optional: true,
    credit: 3
  },
  {
    cid: '0721445',
    name: '* بناء األدوات المساندة لهندسة البرمجيات',
    lvl: 4,
    dependsOn: ['0721420'],
    optional: true,
    credit: 3
  },
  {
    cid: '0721421',
    name: 'الهندسة العكسية للبرمجيات',
    lvl: 4,
    dependsOn: ['0721420'],
    credit: 3
  },
  {
    cid: '0721422',
    name: 'هندسة برمجيات المواقع اإللكترونية',
    lvl: 4,
    dependsOn: ['0731213', '0721420'],
    credit: 3
  },
  {
    cid: '0721423',
    name: 'تصميم واجهات المستخدم الجرافيكية',
    lvl: 4,
    dependsOn: ['0761220'],
    credit: 3
  },
  { cid: '0721438', name: 'التدريب العملي', lvl: 4, credit: 0 },
  {
    cid: '0721449',
    name: '2 مشروع بحث',
    lvl: 4,
    dependsOn: ['0721448'],
    credit: 2
  }
];