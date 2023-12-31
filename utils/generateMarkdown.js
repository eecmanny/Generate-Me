

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  //If else statments that will make descriptions in Markdown format

  if (license === 'GPL') {
    return ` GNU GENERAL PUBLIC LICENSE
    Version 2, June 1991

Copyright (C) 1989, 1991 Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.
`
  } else if (license === 'MIT') {
    return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (license === 'BSD') {
    return `Note: This license has also been called the “New BSD License” or “Modified BSD License”. See also the 2-clause BSD License.

    Copyright <YEAR> <COPYRIGHT HOLDER>
    
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  } else if (license === 'AGPL') {
    return ` GNU AFFERO GENERAL PUBLIC LICENSE
    Version 3, 19 November 2007
    
    Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`
  } else if (license === 'IBM') {
    return `This operator is distributed on Apache 2.0 license.

    However, the operands that are installed by this operator, in particular 
    IBM License Service and IBM License Service Reporter, are not covered 
    by the Open Source license. These operands can be used exclusively 
    by IBM Cloud Pak solutions and IBM stand-alone containerized software only 
    for IBM software.
    
    Using the above-mentioned operands for non-IBM products, or non-IBM vendors 
    requires prior authorization by IBM.
    
    
                                     Apache License
                               Version 2.0, January 2004
                            http://www.apache.org/licenses/`

  } else if (license === 'WTFPL') {
    return `    DO WHAT THE FXXX YOU WANT TO PUBLIC LICENSE
    Version 2, December 2004

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

DO WHAT THE FXXX YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FXXX YOU WANT TO.`
  } else {
    //     console.log('No license chosen');
  }

  renderBadgesSection();
}

// TODO: Create a function that returns the badges section of README
// If there is no badges, return an empty string
function renderBadgesSection(license) {

  //If else statments that will make badges in Markdown format

  if (license === 'GPL') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'AGPL') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  } else if (license === 'WTFPL') {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }

}


// TODO: Create a function to generate markdown for README
//Put the 
// class MarkDown {
function Markdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const badgesSection = renderBadgesSection(data.license);
  console.log('in markdown', data)
  return `# ${data.title}
  

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credit)
- [License](#license)
- [Badges](#badges)
- [features](#features)
- [Contribute](#contributes)
- [Test](#test)
- [Questions](#questions)
    
    
    
## Installation
${data.installation}
    
## Usage
${data.usage}
  
    
## Credits
${data.credit}
  
    
## License
${badgesSection}
${data.license}
${licenseSection}
   
    
## Features
${data.features}
  
    
## How to Contribute
${data.contributes}
  
    
## Test
${data.test}
  
    
## Questions
${data.email}
${data.github}
${data.deployedSite}
  `;
}
// };
// ## Badges
// ${data.badges}

module.exports = Markdown;
