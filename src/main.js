import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AutoComplete from './components/autocomplete/AutoComplete';
import Accordion from './components/accordion/Accordion';
import AccordionTab from './components/accordiontab/AccordionTab';
import BlockUI from './components/blockui/BlockUI';
import Breadcrumb from './components/breadcrumb/Breadcrumb';
import Button from './components/button/Button';
import Calendar from './components/calendar/Calendar';
import Card from './components/card/Card';
import Carousel from './components/carousel/Carousel';
import Chart from './components/chart/Chart';
import Checkbox from './components/checkbox/Checkbox';
import Chips from './components/chips/Chips';
import ColorPicker from './components/colorpicker/ColorPicker';
import Column from './components/column/Column';
import ColumnGroup from './components/columngroup/ColumnGroup';
import ContextMenu from './components/contextmenu/ContextMenu';
import DataTable from './components/datatable/DataTable';
import DataView from './components/dataview/DataView';
import DataViewLayoutOptions from './components/dataviewlayoutoptions/DataViewLayoutOptions';
import DeferredContent from './components/deferredcontent/DeferredContent';
import Dialog from './components/dialog/Dialog';
import Dropdown from './components/dropdown/Dropdown';
import Editor from './components/editor/Editor';
import Fieldset from './components/fieldset/Fieldset';
import FileUpload from './components/fileupload/FileUpload';
import FullCalendar from './components/fullcalendar/FullCalendar';
import InlineMessage from './components/inlinemessage/InlineMessage';
import Inplace from './components/inplace/Inplace';
import InputMask from './components/inputmask/InputMask';
import InputNumber from './components/inputnumber/InputNumber';
import InputSwitch from './components/inputswitch/InputSwitch';
import InputText from './components/inputtext/InputText';
import Listbox from './components/listbox/Listbox';
import MegaMenu from './components/megamenu/MegaMenu';
import Menu from './components/menu/Menu';
import Menubar from './components/menubar/Menubar';
import Message from './components/message/Message';
import MultiSelect from './components/multiselect/MultiSelect';
import OrderList from './components/orderlist/OrderList';
import OrganizationChart from './components/organizationchart/OrganizationChart';
import OverlayPanel from './components/overlaypanel/OverlayPanel';
import Paginator from './components/paginator/Paginator';
import Panel from './components/panel/Panel';
import PanelMenu from './components/panelmenu/PanelMenu';
import Password from './components/password/Password';
import PickList from './components/picklist/PickList';
import ProgressBar from './components/progressbar/ProgressBar';
import ProgressSpinner from './components/progressspinner/ProgressSpinner';
import Rating from './components/rating/Rating';
import RadioButton from './components/radiobutton/RadioButton';
import Row from './components/row/Row';
import Ripple from './components/ripple/Ripple';
import ScrollPanel from './components/scrollpanel/ScrollPanel';
import SelectButton from './components/selectbutton/SelectButton';
import Slider from './components/slider/Slider';
import Sidebar from './components/sidebar/Sidebar';
import SplitButton from './components/splitbutton/SplitButton';
import Steps from './components/steps/Steps';
import TabMenu from './components/tabmenu/TabMenu';
import TabView from './components/tabview/TabView';
import TabPanel from './components/tabpanel/TabPanel';
import Terminal from './components/terminal/Terminal';
import Textarea from './components/textarea/Textarea';
import TieredMenu from './components/tieredmenu/TieredMenu';
import Timeline from './components/timeline/Timeline';
import Tree from './components/tree/Tree';
import TreeTable from './components/treetable/TreeTable';
import Toast from './components/toast/Toast';
import ToastService from './components/toast/ToastService';
import Toolbar from './components/toolbar/Toolbar';
import Tooltip from './components/tooltip/Tooltip';
import ToggleButton from './components/togglebutton/ToggleButton';
import TriStateCheckbox from './components/tristatecheckbox/TriStateCheckbox';
import Galleria from './components/galleria/Galleria';

import CodeHighlight from './views/codehighlight/CodeHighlight';
import AppInputStyleSwitch from './AppInputStyleSwitch';

import './assets/styles/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';
import './assets/styles/flags.css';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
Vue.use(ToastService);
Vue.directive('tooltip', Tooltip);
Vue.directive('ripple', Ripple);

Vue.prototype.$appState = Vue.observable({inputStyle: 'outlined', darkTheme: false});
Vue.prototype.$primevue = Vue.observable({ripple: true});

Vue.config.productionTip = false;

Vue.component('Accordion', Accordion);
Vue.component('AccordionTab', AccordionTab);
Vue.component('AutoComplete', AutoComplete);
Vue.component('BlockUI', BlockUI);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('Button', Button);
Vue.component('Calendar', Calendar);
Vue.component('Card', Card);
Vue.component('Carousel', Carousel);
Vue.component('Chart', Chart);
Vue.component('Checkbox', Checkbox);
Vue.component('Chips', Chips);
Vue.component('ColorPicker', ColorPicker);
Vue.component('Column', Column);
Vue.component('ColumnGroup', ColumnGroup);
Vue.component('ContextMenu', ContextMenu);
Vue.component('DataTable', DataTable);
Vue.component('DataView', DataView);
Vue.component('DataViewLayoutOptions', DataViewLayoutOptions);
Vue.component('DeferredContent', DeferredContent);
Vue.component('Dialog', Dialog);
Vue.component('Dropdown', Dropdown);
Vue.component('Editor', Editor);
Vue.component('Fieldset', Fieldset);
Vue.component('FileUpload', FileUpload);
Vue.component('FullCalendar', FullCalendar);
Vue.component('InlineMessage', InlineMessage);
Vue.component('Inplace', Inplace);
Vue.component('InputMask', InputMask);
Vue.component('InputNumber', InputNumber);
Vue.component('InputSwitch', InputSwitch);
Vue.component('InputText', InputText);
Vue.component('Listbox', Listbox);
Vue.component('MegaMenu', MegaMenu);
Vue.component('Menu', Menu);
Vue.component('Menubar', Menubar);
Vue.component('Message', Message);
Vue.component('MultiSelect', MultiSelect);
Vue.component('OrderList', OrderList);
Vue.component('OrganizationChart', OrganizationChart);
Vue.component('OverlayPanel', OverlayPanel);
Vue.component('Paginator', Paginator);
Vue.component('Panel', Panel);
Vue.component('PanelMenu', PanelMenu);
Vue.component('Password', Password);
Vue.component('PickList', PickList);
Vue.component('ProgressBar', ProgressBar);
Vue.component('ProgressSpinner', ProgressSpinner);
Vue.component('RadioButton', RadioButton);
Vue.component('Rating', Rating);
Vue.component('Row', Row);
Vue.component('ScrollPanel', ScrollPanel);
Vue.component('SelectButton', SelectButton);
Vue.component('Slider', Slider);
Vue.component('Sidebar', Sidebar);
Vue.component('SplitButton', SplitButton);
Vue.component('Steps', Steps);
Vue.component('TabView', TabView);
Vue.component('TabPanel', TabPanel);
Vue.component('TabMenu', TabMenu);
Vue.component('Terminal', Terminal);
Vue.component('Textarea', Textarea);
Vue.component('TieredMenu', TieredMenu);
Vue.component('Timeline', Timeline);
Vue.component('Toast', Toast);
Vue.component('Toolbar', Toolbar);
Vue.component('ToggleButton', ToggleButton);
Vue.component('Tree', Tree);
Vue.component('TreeTable', TreeTable);
Vue.component('TriStateCheckbox', TriStateCheckbox);
Vue.component('Galleria', Galleria);

Vue.component('CodeHighlight', CodeHighlight);
Vue.component('AppInputStyleSwitch', AppInputStyleSwitch);

router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
