const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');
const leopard = require('./node_modules/leopard'); // Path to the LeopardJS library
const nodeFetch = require('node-fetch');
const fs = require('fs-remote');

class Scratch3YourExtension {
  constructor(runtime) {
    // put any setup for your extension here
  }

  /**
   * Returns the metadata about your extension.
   */
  getInfo() {
    return {
      // unique ID for your extension
      id: 'yourScratchExtension',

      // name that will be displayed in the Scratch UI
      name: 'Scratch AI',

      // colours to use for your extension blocks
      color1: '#D7DF01', // Block Color
      color2: '#868A08', // Border Color

      // icons to display
      blockIconURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',
      menuIconURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAAAAACyOJm3AAAAFklEQVQYV2P4DwMMEMgAI/+DEUIMBgAEWB7i7uidhAAAAABJRU5ErkJggg==',

      // your Scratch blocks
      blocks: [
        {
          // name of the function where your block code lives
          opcode: 'myFirstBlock',

          // type of block - choose from:
          //   BlockType.REPORTER - returns a value, like "direction"
          //   BlockType.BOOLEAN - same as REPORTER but returns a true/false value
          //   BlockType.COMMAND - a normal command block, like "move {} steps"
          //   BlockType.HAT - starts a stack if its value changes from false to true ("edge triggered")
          blockType: BlockType.REPORTER,

          // label to display on the block
          text: 'How can Scratch Tutor assist you today? [personsRequest] Please input project ID: [projectID]',

          // Please input project ID: [projectID]

          // true if this block should end a stack
          terminal: false,

          // where this block should be available for code - choose from:
          //   TargetType.SPRITE - for code in sprites
          //   TargetType.STAGE  - for code on the stage / backdrop
          // remove one of these if this block doesn't apply to both
          filter: [TargetType.SPRITE, TargetType.STAGE],

          // arguments used in the block
          arguments: {
            projectID: {
              // default value before the user sets something
              defaultValue: 12345678,

              // type/shape of the parameter - choose from:
              //     ArgumentType.ANGLE - numeric value with an angle picker
              //     ArgumentType.BOOLEAN - true/false value
              //     ArgumentType.COLOR - numeric value with a color picker
              //     ArgumentType.NUMBER - numeric value
              //     ArgumentType.STRING - text value
              //     ArgumentType.NOTE - midi music value with a piano picker
              type: ArgumentType.NUMBER,
            },
            personsRequest: {
              // default value before the user sets something
              defaultValue: 'hello',

              // type/shape of the parameter - choose from:
              //     ArgumentType.ANGLE - numeric value with an angle picker
              //     ArgumentType.BOOLEAN - true/false value
              //     ArgumentType.COLOR - numeric value with a color picker
              //     ArgumentType.NUMBER - numeric value
              //     ArgumentType.STRING - text value
              //     ArgumentType.NOTE - midi music value with a piano picker
              type: ArgumentType.STRING,
            },
          },
        },
      ],
    };
  }

  /**
   * implementation of the block with the opcode that matches this name
   *  this will be called when the block is used
   */
  async myFirstBlock({ personsRequest, projectID }) {
    // For testing purposes, simulate ChatGPT responses
    const chatGPTResponse = personsRequest + ' is a cool question!';

    try {
      const response = await nodeFetch(`https://projects.scratch.mit.edu/${projectID}`);
      const data = await response.arrayBuffer();
      const buffer = Buffer.from(data);
      fs.writeFile(`${projectID}.sb3`, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });

      return chatGPTResponse;
    } catch (error) {
      return 'Error: ' + error;
    }
  }
}

module.exports = Scratch3YourExtension;