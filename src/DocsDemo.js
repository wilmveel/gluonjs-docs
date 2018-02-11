import {GluonElement, html} from "gluonjs";
import jsBeautify from 'js-beautify'

class DocsDemo extends GluonElement {

  get template(){
    return html`
       <style>
        section {
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 
          0 1px 5px 0 rgba(0, 0, 0, 0.12), 
          0 3px 1px -2px rgba(0, 0, 0, 0.2);
          margin-bottom: 40px;
        }
        #demo {
          padding: 10px;
        }
        #code {
          background: #f5f5f5;
          padding: 10px;
        }
       </style>
       <section>
        <div id="demo">
          <slot></slot>
        </div>
        <pre id="code">${this.code}</pre>
      </section>`
  }

  get code(){

    const html = this.innerHTML.trim();
    const options = {
      "indent_size": 2,
      "wrap_attributes": "force",
      "unescape_strings": true,
    }
    return jsBeautify.html(html, options)
  }

  connectedCallback(){
    super.connectedCallback();
    const slot = this.shadowRoot.querySelector('slot');

  }

}

customElements.define(DocsDemo.is, DocsDemo);