export default function(editor, opt = {}) {
  const c = opt;
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const textType = domc.getType('text');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const textModel = textType.model;
  const textView = textType.view;

  let stateNormal = 'Normal';
  let stateSuccess = 'Success';
  let stateError = 'Error';

  const idTrait = {
    name: 'id',
    label: c.labelTraitId,
  };

  const forTrait = {
    name: 'for',
    label: c.labelTraitFor,
  };

  const nameTrait = {
    name: 'name',
    label: c.labelTraitName,
  };

  const placeholderTrait = {
    name: 'placeholder',
    label: c.labelTraitPlaceholder,
  };

  const valueTrait = {
    name: 'value',
    label: c.labelTraitValue,
  };

  const requiredTrait = {
    type: 'checkbox',
    name: 'required',
    label: c.labelTraitRequired,
  };

  const checkedTrait = {
    label: c.labelTraitChecked,
    type: 'checkbox',
    name: 'checked',
    changeProp: 1
  };

  const preventDefaultClick = () => {
    return defaultType.view.extend({
      events: {
        'mousedown': 'handleClick',
      },

      handleClick(e) {
        e.preventDefault();
      },
    });
  };



  // INPUT
  domc.addType('input', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'custom-name': c.labelInputName,
        tagName: 'input',
        draggable: '*',
        droppable: false,
        traits: [
          nameTrait,
          placeholderTrait, {
            label: c.labelTraitType,
            type: 'select',
            name: 'type',
            options: [
              {value: 'text', name: c.labelTypeText},
              {value: 'email', name: c.labelTypeEmail},
              {value: 'password', name: c.labelTypePassword},
              {value: 'number', name: c.labelTypeNumber},
            ]
          }, requiredTrait
        ],
      }),
    }, {
      isComponent(el) {
        if(el.tagName == 'INPUT') {
          return {type: 'input'};
        }
      },
    }),
    view: defaultView,
  });

  var inputType = domc.getType('input');
  var inputModel = inputType.model;


  // SELECT
  domc.addType('select', {
    model: defaultModel.extend({
      defaults: Object.assign({}, inputModel.prototype.defaults, {
        'custom-name': c.labelSelectName,
        tagName: 'select',
        traits: [
          nameTrait, {
            label: c.labelTraitOptions,
            type: 'select-options'
          },
          requiredTrait
        ],
      }),
    }, {
      isComponent(el) {
        if(el.tagName == 'SELECT'){
          return {type: 'select'};
        }
      },
    }),
    view: preventDefaultClick(),
  });


  domc.addType('button', {
    model: defaultModel.extend({
      defaults: Object.assign({}, inputModel.prototype.defaults, {
        'custom-name': c.labelButtonName,
        tagName: 'button',
        traits: [{
          type: 'content',
          label: 'Text',
        },{
          label: c.labelTraitType,
          type: 'select',
          name: 'type',
          options: [
            {value: 'submit', name: c.labelTypeSubmit},
            {value: 'reset', name: c.labelTypeReset},
            {value: 'button', name: c.labelTypeButton},
          ]
        }]
      }),
    }, {
      isComponent(el) {
        if(el.tagName == 'BUTTON'){
          return {type: 'button'};
        }
      },
    }),
    view: defaultView.extend({
      events: {
        'click': 'handleClick'
      },

      init() {
        this.listenTo(this.model, 'change:content', this.updateContent);
      },

      updateContent() {
        this.el.innerHTML = this.model.get('content')
      },

      handleClick(e) {
        e.preventDefault();
      },
    }),
  });
  
  domc.addType('compTable', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        //'custom-name': 'compTable', //
        tagName: 'table',
        draggable: '*',
        droppable: [ 'tbody', 'thead', 'tr', 'th', 'td'],
      }),
    }, {
      isComponent(el) {
        if(el.tagName == 'TABLE'){
          return {type: 'table'};
        }
      },
    }),
    view: defaultView.extend({
      events: {
        'click': 'handleClick'
      },

      init() {
        //this.listenTo(this.model, 'change:content', this.updateContent);
      },

      handleClick(e) {
        e.preventDefault();
      },
    }),
  });

  
  /*
  domc.addType('compTableRow', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        //'custom-name': 'compTable', //
        tagName: 'tr',
        draggable: ['table', 'tbody', 'thead'],
        droppable: ['th', 'td']
      }),
    }, {
      isComponent(el) {
        console.log(el)
        if(el.tagName == 'TR'){
          return {type: 'tr'};
        }
      },
    }),
    view: defaultView.extend({
      events: {
        'click': 'handleClick'
      },

      init() {
        //this.listenTo(this.model, 'change:content', this.updateContent);
      },

      handleClick(e) {
        e.preventDefault();
      },
    }),
  });
  */




}
