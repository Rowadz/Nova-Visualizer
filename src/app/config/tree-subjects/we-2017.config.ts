import { TreeSubejct } from '../models/tree-subject.model';

export const WE2017: Array<TreeSubejct> = [
  { cid: '731110', name: 'مقدمة في تكنولوجيا المعلومات', lvl: 1 },
  { cid: '780110', name: 'مقدمة في الانترنت و الويب', lvl: 1 },
  { cid: '750113', name: 'أساسيات البرمجه 1', lvl: 1 },
  { cid: '750120', name: 'رياضيات متقطعة', lvl: 1 },
  { cid: '780111', name: 'اساسيات هندسة الويب', lvl: 1, dependsOn: ['780110'] },
  { cid: '750114', name: 'أساسيات البرمجة 2', lvl: 1, dependsOn: ['750113'] },
  { cid: '780220', name: 'الحكومة الإلكترونية', lvl: 2, dependsOn: ['780111'] },
  { cid: '780230', name: 'بيانات الويب', lvl: 2, dependsOn: ['780111'] },
  { cid: '731213', name: 'برمجة المواقع', lvl: 2, dependsOn: ['750114'] },
  { cid: '721223', name: 'برمجة كينونة', lvl: 2, dependsOn: ['750114'] },
  { cid: '750272', name: 'التحليل العددي', lvl: 2, dependsOn: ['750114'] },
  { cid: '721240', name: 'أخلاقيات', lvl: 2, dependsOn: ['731110'] },
  { cid: '780221', name: 'متطلبات', lvl: 2, dependsOn: ['780111'] },
  { cid: '750215', name: 'البرمجة المرئية', lvl: 2, dependsOn: ['721223'] },
  { cid: '731221', name: 'قواعد البيانات', lvl: 2, dependsOn: ['721223'] },
  { cid: '721224', name: 'تراكيب البيانات', lvl: 2, dependsOn: ['721223'] },
  { cid: '250231', name: 'الإحصاء', lvl: 2, dependsOn: ['750120'] },
  {
    cid: '780321',
    name: 'إدارة عمليات و مشاريع',
    lvl: 3,
    dependsOn: ['780221']
  },
  {
    cid: '780320',
    name: 'تحليل و تصميم نظم الويب',
    lvl: 3,
    dependsOn: ['780221']
  },
  { cid: '780340', name: 'جهة الخادم', lvl: 3, dependsOn: ['780230'] },
  { cid: '750335', name: 'نظم التشغيل', lvl: 3, dependsOn: ['721224'] },
  { cid: '750323', name: 'الخوارزميات', lvl: 3, dependsOn: ['721224'] },
  { cid: '780323', name: 'قابلية الاستخدام', lvl: 3, dependsOn: ['780320'] },
  { cid: '780341', name: 'جهة العميل', lvl: 3, dependsOn: ['780230'] },
  { cid: '780324', name: 'خدمات الويب', lvl: 3, dependsOn: ['780340'] },
  {
    cid: '780346',
    name: 'اداره الخوادم *',
    lvl: 3,
    dependsOn: ['780340'],
    optional: true
  },
  { cid: '731340', name: 'اساسيات الشكبات', lvl: 3, dependsOn: ['721224'] },
  { cid: '780420', name: 'التجارة الإلكترونية', lvl: 3, dependsOn: ['780323'] },
  { cid: '780470', name: 'التدريب العملي', lvl: 4 },
  { cid: '780480', name: 'مشروع 1', lvl: 4 },
  { cid: '780432', name: 'موضوعات خاصة *', lvl: 4, optional: true },
  { cid: '750464', name: 'استرجاع المعلومات', lvl: 4, dependsOn: ['750335'] },
  {
    cid: '780344',
    name: 'تطبيقات الهواتف *',
    lvl: 4,
    dependsOn: ['780323'],
    optional: true
  },
  { cid: '780432', name: 'ضمان الجودة', lvl: 4, dependsOn: ['780320'] },
  { cid: '780481', name: 'مشروع 2', lvl: 4, dependsOn: ['780480'] },
  { cid: '731423', name: 'التنقيب عن البيانات', lvl: 4, dependsOn: ['750464'] },
  { cid: '780431', name: 'أمن الويب', lvl: 4, dependsOn: ['731340'] },
  {
    cid: '780430',
    name: 'الويب الدلالي',
    lvl: 4,
    dependsOn: ['780324'],
    optional: true
  },
  {
    cid: '780445',
    name: 'الحوسبة الحسابية',
    lvl: 4,
    dependsOn: ['780324'],
    optional: true
  }
];
