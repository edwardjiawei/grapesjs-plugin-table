export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;

  if (c.blocks.indexOf('input') >= 0) {
    bm.add('input', {
      label: `
      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>
        <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>
      </svg>
      <div class="gjs-block-label">${c.labelInputName}</div>`,
      category: 'Forms',
      content: '<input class="input"/>',
    });
  }

  if (c.blocks.indexOf('select') >= 0) {
    bm.add('select', {
      label: `
      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
        <polygon class="gjs-block-svg-path" transform="translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) " points="18.5 11 20 13 17 13"></polygon>
        <rect class="gjs-block-svg-path" x="4" y="11.5" width="11" height="1"></rect>
      </svg>
      <div class="gjs-block-label">${c.labelSelectName}</div>`,
      category: 'Forms',
      content: `<select class="select">
        ${c.labelSelectOption ? `<option value="">${c.labelSelectOption}</option>` : ''}
        <option value="1">${c.labelOption} 1</option>
        </select>`,
    });
  }

  if (c.blocks.indexOf('button') >= 0) {
    bm.add('button', {
      label: `
      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
        <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>
      </svg>
      <div class="gjs-block-label">${c.labelButtonName}</div>`,
      category: 'Forms',
      content: '<button class="button">Send</button>',
    });
  }


  if (c.blocks.indexOf('compTable') >= 0) {
    bm.add('compTable', {
      label: `
      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
        <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>
      </svg>
      <div class="gjs-block-label">CompTable</div>`,
      category: 'Forms',
      content: '<table class="table"><tr><td>Send</td></tr></table>',
    });
  }

  if (c.blocks.indexOf('compTableRow') >= 0) {
    bm.add('compTableRow', {
      label: `
      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
        <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>
      </svg>
      <div class="gjs-block-label">Tr</div>`,
      category: 'Forms',
      content: '<tr><td>Send2</td></tr>',
    });
  }

  if (c.blocks.indexOf('Table') >= 0) {
    bm.add('Table', {
      label: 'Table',
      category: 'Forms',
      attributes: {class:'fa fa-map-o'},
      content: {
        type: 'table',
        style: {width: '100%'}
      },
    });
  }


  if (c.blocks.indexOf('TableRow') >= 0) {
    bm.add('TableRow', {
      label: 'TableRow',
      category: 'Forms',
      attributes: {class:'fa fa-map-o'},
      content: {
        type: 'row',
        classes: ['tablerow'],
        style: {height: '75px'} //padding 10
      },
    });
  }

  
  if (c.blocks.indexOf('TableCell') >= 0) {
    bm.add('TableCell', {
      label: 'TableCell',
      category: 'Forms',
      attributes: {class:'fa fa-map-o'},
      content: {
        type: 'cell',
        classes: ['tablecell']
      },
    });
  }

}
