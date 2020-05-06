import { Component } from '@angular/core';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AlertController, LoadingController } from '@ionic/angular';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  width = 0;
  height = 0; /* h */
  documentDefinition;
  pdfObj;
  loading;

  constructor(
    private file: File,
    private fileOpener: FileOpener,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }

  ionViewWillEnter() {
    // this.createPdf();
  }

  async createPdf() {
    this.loading = await this.loadingController.create({
      message: 'Please wait while downloading...'
    });
    await this.loading.present();
    const textColorPrimary = '#000000';
    this.height = 0;
    this.width = 0;
    this.documentDefinition = {
      header: (currentPage, pageCount, pageSize) => { },
      pageSize: 'A4',
      content: [
        { text: 'STATEMENT', fontSize: 18, bold: true, alignment: 'center', color: 'blue', decoration: 'underline' },
        { text: 'CUSTOMER\'S NAME & ADDRESS', bold: true, color: textColorPrimary },
        {
          canvas: [
            {
              type: 'rect',
              x: 0.5,
              y: this.height += 2,
              w: 203,
              h: 105,
              r: 4,
              lineColor: '#D3D3D3',
              color: '#D3D3D3'
            },
            {
              type: 'rect',
              x: 0.5,
              y: this.height,
              w: 200,
              h: 102,
              r: 4,
              lineColor: '#D3D3D3',
              color: 'white'
            },
            {
              type: 'rect',
              x: 315,
              y: this.height,
              w: 213,
              h: 105,
              r: 4,
              lineColor: '#D3D3D3',
              color: '#D3D3D3'
            },
            {
              type: 'rect',
              x: 315,
              y: this.height,
              w: 210,
              h: 102,
              r: 4,
              lineColor: '#D3D3D3',
              color: 'white'
            },
          ]
        },
        {
          text: 'TEST NAME',
          absolutePosition: { x: 50, y: this.height += 88 },
          fontSize: 10,
          color: textColorPrimary
        }, /* h90 */
        {
          text: 'TEST LOCATION',
          absolutePosition: { x: 50, y: this.height += 40 },
          fontSize: 9,
          color: textColorPrimary
        }, /* h130 */
        {
          text: 'TRADE KINGS LIMITED ZAMBIA',
          absolutePosition: { x: 0, y: this.height - 40 },
          fontSize: 8,
          color: textColorPrimary,
          alignment: 'right'
        }, /* 90 */
        {
          text: 'PLOT NO 29381, NAMPUNDWE RD..LUSKA, ZAMBIA',
          absolutePosition: { x: 0, y: this.height - 25 },
          fontSize: 8,
          color: textColorPrimary,
          alignment: 'right'
        }, /* 105 */
        {
          text: 'L GHT INDUSTRIAL AREA',
          absolutePosition: { x: 0, y: this.height - 10 },
          fontSize: 8,
          color: textColorPrimary,
          alignment: 'right'
        }, /* 120 */
        {
          text: 'TEL: - ',
          absolutePosition: { x: 0, y: this.height += 5 },
          fontSize: 8,
          color: textColorPrimary,
          alignment: 'right'
        }, /* h135 */
        {
          text: 'FAX: +264 211-286127',
          absolutePosition: { x: 0, y: this.height += 15 },
          fontSize: 8,
          color: textColorPrimary,
          alignment: 'right'
        }, /* h150 */
        {
          text: 'E-MAIL: info.tradekings.co.zm',
          absolutePosition: { x: 0, y: this.height += 15 },
          fontSize: 8,
          color: textColorPrimary,
          alignment: 'right'
        }, /* h165 */
        {
          text: 'TIN No. 1001736629',
          absolutePosition: { x: 0, y: this.height += 25 },
          fontSize: 8,
          bold: true,
          color: textColorPrimary,
          alignment: 'right'
        }, /* h190 */
        {
          text: 'Period 01-01-2020 to 07-04-2020',
          absolutePosition: { x: 50, y: this.height += 15 },
          fontSize: 9,
          bold: true,
          color: textColorPrimary
        }, /* h205 */
        {
          text: 'PAGE No.         1 of 1',
          absolutePosition: { x: 470, y: this.height },
          fontSize: 9,
          bold: true,
          color: textColorPrimary
        }, /* h205 */
        {
          absolutePosition: { x: 50, y: this.height += 25 },
          // layout: 'lightHorizontalLines', // optional
          table: {
            headerRows: 1,
            widths: ['*', '*', 100, 50, 50, 100],
            body: this.prepareRowData()
          },
          layout: { hLineColor: 'black', vLineColor: 'black' }
        },
        // View For Total Amount Due Begin
        // {
          // absolutePosition: { x: 0, y: this.height },
          // canvas: [
          //   {
          //     type: 'rect',
          //     x: 350,
          //     y: this.height - 165,
          //     w: 180,
          //     h: 65,
          //     r: 4,
          //     lineColor: '#D3D3D3',
          //     color: '#D3D3D3'
          //   },
          //   {
          //     type: 'rect',
          //     x: 350,
          //     y: this.height - 165,
          //     w: 177,
          //     h: 62,
          //     r: 4,
          //     lineColor: '#D3D3D3',
          //     color: 'white'
          //   },
          // ],
          // canvas: [
          //   {
          //     type: 'rect',
          //     x: 350,
          //     y: -totalCard,
          //     w: 180,
          //     h: 65,
          //     r: 4,
          //     lineColor: '#D3D3D3',
          //     color: '#D3D3D3',
          //   },
          //   {
          //     type: 'rect',
          //     x: 350,
          //     y: -totalCard,
          //     w: 177,
          //     h: 62,
          //     r: 4,
          //     lineColor: '#D3D3D3',
          //     color: 'white',
          //   },
          // ]
        // },
        // {
        //   text: 'TOTAL AMOUNT DUE',
        //   relativePosition: { x: 0, y: 0 },
        //   fontSize: 11,
        //   bold: true,
        //   color: textColorPrimary,
        //   alignment: 'right'
        // },
        // {
        //   text: `1000 DR`,
        //   absolutePosition: { x: 0, y: totalCard + 30 },
        //   fontSize: 10,
        //   color: 'blue',
        //   alignment: 'right'
        // },
        // View For Total Amount Due End
        // {
        //   canvas: [
        //       {
        //           type: 'line',
        //           x1: 10,
        //           y1: this.height - 360,
        //           x2: 515,
        //           y2: this.height - 360,
        //           lineWidth: 2
        //       }
        //   ]
        // }
      ],
      pageBreakBefore: function (currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) {
        // console.log('1', currentNode);
        // console.log('2', followingNodesOnPage);
        // console.log('3', nodesOnNextPage);
        // console.log('4', previousNodesOnPage);
        let test = false;
        if (currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0) {
          test = true;
        }

        if (currentNode.startPosition.top > 750) {
          test = true;
        }

        if (currentNode.hasOwnProperty('id')) {
          // totalCard = currentNode.startPosition.top;
          // console.log('total', totalCard);
        }
        return test;
      }
    };
    // const doc =pdfMake.createPdf(documentDefinition)
    // doc.getBase64((data) => { window.location.href = 'data:application/pdf;base64,' + data; });

    this.pdfObj = pdfMake.createPdf(this.documentDefinition);
    this.onDownload();
  }

  async onDownload() {
    this.pdfObj.getBuffer(buffer => {
      var utf8 = new Uint8Array(buffer); // Convert to UTF-8...
      let binaryArray = utf8.buffer; //
      this.file.resolveDirectoryUrl(this.file.externalRootDirectory)
        .then(dirEntry => {
          console.log('PATH---', dirEntry);
          this.file.getFile(dirEntry, `test.pdf`, { create: true })
            .then(fileEntry => {
              console.log('PATHHHHHH---', dirEntry);
              fileEntry.createWriter(writer => {
                writer.onwrite = async () => {
                  // this.fileOpener.open(fileEntry.toURL(), 'application/pdf')
                  this.loading.dismiss();
                  const alert = await this.alertController.create({
                    header: 'Confirm!',
                    message: 'Your Pdf is downloaded in your storage, Do you want to open now!',
                    buttons: [
                      {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        handler: () => {
                          this.fileOpener.open('file:///storage/emulated/0/test.pdf', 'application/pdf')
                            .then(res => { })
                            .catch(err => {
                              console.log('fileOpener', err);
                            });
                        }
                      }
                    ]
                  });
                  await alert.present();
                };
                writer.write(binaryArray);
              });
            })
            .catch(err => {
              this.loading.dismiss();
              console.log('file', err);
            });
        })
        .catch(err => {
          this.loading.dismiss();
          console.log('resolveDirectoryUrl', err);
        });

    });
  }

  prepareRowData() {
    let headingColor = '#8f1515';
    let textColorSecondary = '#202020';
    const body = []
    body.push(
      [
        { text: 'DATE', color: headingColor, fontSize: 10 },
        { text: 'REFERENCE', color: headingColor, fontSize: 10 },
        { text: 'DESCRIPTION', color: headingColor, fontSize: 10 },
        { text: 'DEBIT', color: headingColor, fontSize: 10, alignment: 'right' },
        { text: 'CREDIT', color: headingColor, fontSize: 10, alignment: 'right' },
        { text: 'BALANCE', color: headingColor, fontSize: 10, alignment: 'right' }
      ]
    );
    // tslint:disable-next-line: max-line-length
    // body.push([ '', '', 
    //   { 
    //     text: 'Brought Forward', 
    //     color: 'blue', 
    //     bold: true, 
    //     fontSize: 9,
    //     margin: [0, 6, 0, 6] 
    //   }, '', '', 
    //   { 
    //     text: '24,023.75 DR', 
    //     color: 'blue', 
    //     bold: true, 
    //     fontSize: 8,
    //     margin: [0, 6, 0, 6], 
    //     alignment: 'right' 
    //   }
    // ]);

    this.height += 50;

    // Remove the temp iterate forEachloop after testing after testing
    // this.tempIterate.forEach(element => {
    //   console.log('+-+-+-+');

    //     //Main code Begin
    //     this.statements.forEach(statement => {
    //       this.height += 26;
    //       const row = [
    //         {
    //         text: new DatePipe('en_ZM').transform(statement.date, 'dd/mm/yy'),
    //         color: textColorSecondary,
    //         fontSize: 8,
    //         margin: [0, 6, 0, 6],
    //         lineHeight: 1
    //       },
    //       {
    //         text: statement.ref,
    //         color: textColorSecondary,
    //         fontSize: 8,
    //         margin: [0, 6, 0, 6],
    //         lineHeight: 1
    //       },
    //       {
    //         text: statement.desc,
    //         color: textColorSecondary,
    //         fontSize: 8,
    //         margin: [0, 6, 0, 6],
    //         lineHeight: 1
    //       },
    //       {
    //         text: statement.debit ? Number(statement.debit).toFixed(2): '',
    //         color: textColorSecondary,
    //         fontSize: 8,
    //         margin: [0, 6, 0, 6],
    //         lineHeight: 1,
    //         alignment: 'right'
    //       },
    //       {
    //         text: statement.credit ? Number(statement.credit).toFixed(2): '',
    //         color: textColorSecondary,
    //         fontSize: 8,
    //         margin: [0, 6, 0, 6],
    //         lineHeight: 1,
    //         alignment: 'right'
    //       },
    //       {
    //         text: Number(statement.balance).toFixed(2) + '  DR',
    //         color: textColorSecondary,
    //         fontSize: 8,
    //         margin: [0, 6, 0, 6],
    //         lineHeight: 1,
    //         alignment: 'right'
    //       }
    //     ]
    //     body.push(row);

    //   }

    //   )
    //   //Main code End

    // });

    for (let i = 0; i <= 40; i++) {
      this.height += 26;
      const row = [
        {
          text: '2020-05-06 12:45:34',
          color: textColorSecondary,
          fontSize: 8,
          margin: [0, 6, 0, 6],
          lineHeight: 1
        },
        {
          text: 'Test',
          color: textColorSecondary,
          fontSize: 8,
          margin: [0, 6, 0, 6],
          lineHeight: 1
        },
        {
          text: 'Test',
          color: textColorSecondary,
          fontSize: 8,
          margin: [0, 6, 0, 6],
          lineHeight: 1
        },
        {
          text: 1000,
          color: textColorSecondary,
          fontSize: 8,
          margin: [0, 6, 0, 6],
          lineHeight: 1,
          alignment: 'right'
        },
        {
          text: 1000,
          color: textColorSecondary,
          fontSize: 8,
          margin: [0, 6, 0, 6],
          lineHeight: 1,
          alignment: 'right'
        },
        {
          text: '1000' + '  DR',
          color: textColorSecondary,
          fontSize: 8,
          margin: [0, 6, 0, 6],
          lineHeight: 1,
          alignment: 'right'
        }
      ]
      body.push(row);

    }

    // Total Credit Debit Row
    this.height += 20;
    body.push(
      [
        { text: '' },
        { text: '' },
        { text: '' },
        { text: 1000, color: 'black', fontSize: 11, margin: [0, 6, 0, 6], alignment: 'right' },
        { text: 2000, color: 'black', fontSize: 11, margin: [0, 6, 0, 6], alignment: 'right' },
        { text: '' }
      ]
    );

    body.push(
      [
        { border: [false, false, false, false], text: '' },
        { border: [false, false, false, false], text: '' },
        { border: [false, false, false, false], text: '' },
        { border: [false, false, false, false], text: '' },
        { border: [true, false, false, true], text: 'TOTAL AMOUNT DUE', fontSize: 11, bold: true, alignment: 'center', color: '#000000'},
        {
          text: `8000 DR`,
          border: [false, true, true, true],
          fontSize: 10,
          bold: true,
          color: 'blue',
          alignment: 'center',
          margin: [0, 6, 0, 6]
        }
      ]
    );

    return body;
  }

}
