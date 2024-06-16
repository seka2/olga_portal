import { getSignalArchive } from "http/siteApi";
import classes from "./ArchiveDeals.module.scss";
import { useEffect, useState } from "react";


interface ArrayResType {
  [key: string]: {
    [key: string]: {
      r_print: string,
      r: number,
      name: string,
    };
  };
}

interface ArrayDataType {
  [key: string]: {
    [key: string]: {
      [key: string]: number;
    }
  };
}


export const ArchiveDeals = () => {

  const [array_res, setArrayRes] = useState<ArrayResType | null>(null);
  const [array_data, setArrayData] = useState<ArrayDataType | null>(null);
  
  const printResArchive = (month1Ago : string, arrayData : ArrayDataType) => {
    let res = arrayData["12"]["-1"][month1Ago] - 100;
    res = Math.round(res * 100) / 100; // Округляем до двух знаков после запятой
    return res + "%";
  }

  const __load_async = async() => {
    let result = await getSignalArchive();
    setArrayRes(result.array_res);
    setArrayData(result.array_data);

    console.log(result);
  }

  useEffect(() => {
    __load_async();
  }, []);
  
  return (
    <div className={classes.deals}>
      <div className={classes.analytics}>
        {array_data != null && array_res != null && (

        <div className={classes.overlay}>
          <div className={classes.overflow}>
            <div className={classes.wrapper}>
      
              <div className={classes.results}>
                <div className={`${classes.results__table} ${classes.scrolled}`}>
                  <table>
                    <tbody>
                      
                      <tr>
                        <td></td>
                        <td className={classes.green}></td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={14}>{ array_res["12"]["-12"]['name'] }</td>
                      </tr>
                      
                      <tr>
                        <td className={classes.green}></td>
                        <td className={classes.lightgray}></td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={13}>{ array_res["12"][-11]['name'] }</td>
                      </tr>
                      
                      <tr className={classes.gray}>
                        <td className={classes.green}>{ array_res["12"][-12]['name'] }</td>
                        <td>{ array_res["12"][-12]['r_print'] }</td>
                        <td>{ array_data["12"][-12][-12] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={11}>{ array_res["12"][-10]['name'] }</td>
                      </tr>
                      
                      <tr>
                        <td className={classes.green}>{ array_res["12"][-11]['name'] }</td>
                        <td className={classes.lightgray}>{ array_res["12"][-11]['r_print'] }</td>
                        <td>{ array_data["12"][-11][-12] }</td>
                        <td>{ array_data["12"][-11][-11] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={10}>{ array_res["12"][-9]['name'] }</td>
                      </tr>
                      
                      <tr className={classes.gray}>
                        <td className={classes.green}>{ array_res["12"][-10]['name'] }</td>
                        <td>{ array_res["12"][-10]['r_print'] }</td>
                        <td>{ array_data["12"][-10][-12] }</td>
                        <td>{ array_data["12"][-10][-11] }</td>
                        <td>{ array_data["12"][-10][-10] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={9}>{ array_res["12"][-8]['name'] }</td>
                      </tr>
                      
                      <tr>
                        <td className={classes.green}>{ array_res["12"][-9]['name'] }</td>
                        <td className={classes.lightgray}>{ array_res["12"][-9]['r_print'] }</td>
                        <td>{ array_data["12"][-9][-12] }</td>
                        <td>{ array_data["12"][-9][-11] }</td>
                        <td>{ array_data["12"][-9][-10] }</td>
                        <td>{ array_data["12"][-9][-9] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={8}>{ array_res["12"][-7]['name'] }</td>
                      </tr>
                      
                      <tr className={classes.gray}>
                        <td className={classes.green}>{ array_res["12"][-8]['name'] }</td>
                        <td>{ array_res["12"][-8]['r_print'] }</td>
                        <td>{ array_data["12"][-8][-12] }</td>
                        <td>{ array_data["12"][-8][-11] }</td>
                        <td>{ array_data["12"][-8][-10] }</td>
                        <td>{ array_data["12"][-8][-9] }</td>
                        <td>{ array_data["12"][-8][-8] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={7}>{ array_res["12"][-6]['name'] }</td>
                      </tr>
                      
                      <tr>
                        <td className={classes.green}>{ array_res["12"][-7]['name'] }</td>
                        <td className={classes.lightgray}>{ array_res["12"][-7]['r_print'] }</td>
                        <td>{ array_data["12"][-7][-12] }</td>
                        <td>{ array_data["12"][-7][-11] }</td>
                        <td>{ array_data["12"][-7][-10] }</td>
                        <td>{ array_data["12"][-7][-9] }</td>
                        <td>{ array_data["12"][-7][-8] }</td>
                        <td>{ array_data["12"][-7][-7] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={6}>{ array_res["12"][-5]['name'] }</td>
                      </tr>
                      
                      <tr className={classes.gray}>
                        <td className={classes.green}>{ array_res["12"][-6]['name'] }</td>
                        <td>{ array_res["12"][-6]['r_print'] }</td>
                        <td>{ array_data["12"][-6][-12] }</td>
                        <td>{ array_data["12"][-6][-11] }</td>
                        <td>{ array_data["12"][-6][-10] }</td>
                        <td>{ array_data["12"][-6][-9] }</td>
                        <td>{ array_data["12"][-6][-8] }</td>
                        <td>{ array_data["12"][-6][-7] }</td>
                        <td>{ array_data["12"][-6][-6] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={5}>{ array_res["12"][-4]['name'] }</td>
                      </tr>
                      
                      <tr>
                        <td className={classes.green}>{ array_res["12"][-5]['name'] }</td>
                        <td className={classes.lightgray}>{ array_res["12"][-5]['r_print'] }</td>
                        <td>{ array_data["12"][-5][-12] }</td>
                        <td>{ array_data["12"][-5][-11] }</td>
                        <td>{ array_data["12"][-5][-10] }</td>
                        <td>{ array_data["12"][-5][-9] }</td>
                        <td>{ array_data["12"][-5][-8] }</td>
                        <td>{ array_data["12"][-5][-7] }</td>
                        <td>{ array_data["12"][-5][-6] }</td>
                        <td>{ array_data["12"][-5][-5] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={4}>{ array_res["12"][-3]['name'] }</td>
                      </tr>
                      
                      <tr className={classes.gray}>
                        <td className={classes.green}>{ array_res["12"][-4]['name'] }</td>
                        <td className={classes.lightgray}>{ array_res["12"][-4]['r_print'] }</td>
                        <td>{ array_data["12"][-4][-12] }</td>
                        <td>{ array_data["12"][-4][-11] }</td>
                        <td>{ array_data["12"][-4][-10] }</td>
                        <td>{ array_data["12"][-4][-9] }</td>
                        <td>{ array_data["12"][-4][-8] }</td>
                        <td>{ array_data["12"][-4][-7] }</td>
                        <td>{ array_data["12"][-4][-6] }</td>
                        <td>{ array_data["12"][-4][-5] }</td>
                        <td>{ array_data["12"][-4][-4] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={3}>{ array_res["12"][-2]['name'] }</td>
                      </tr>
                      
                      <tr>
                        <td className={classes.green}>{ array_res["12"][-3]['name'] }</td>
                        <td className={classes.lightgray}>{ array_res["12"][-3]['r_print'] }</td>
                        <td>{ array_data["12"][-3][-12] }</td>
                        <td>{ array_data["12"][-3][-11] }</td>
                        <td>{ array_data["12"][-3][-10] }</td>
                        <td>{ array_data["12"][-3][-9] }</td>
                        <td>{ array_data["12"][-3][-8] }</td>
                        <td>{ array_data["12"][-3][-7] }</td>
                        <td>{ array_data["12"][-3][-6] }</td>
                        <td>{ array_data["12"][-3][-5] }</td>
                        <td>{ array_data["12"][-3][-4] }</td>
                        <td>{ array_data["12"][-3][-3] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={`${classes.green} ${classes.regular}`} colSpan={2}>{ array_res["12"][-1]['name'] }</td>
                      </tr>
                      
                      <tr className={classes.gray}>
                        <td className={classes.green}>{ array_res["12"][-2]['name'] }</td>
                        <td>{ array_res["12"][-2]['r_print'] }</td>
                        <td>{ array_data["12"][-2][-12] }</td>
                        <td>{ array_data["12"][-2][-11] }</td>
                        <td>{ array_data["12"][-2][-10] }</td>
                        <td>{ array_data["12"][-2][-9] }</td>
                        <td>{ array_data["12"][-2][-8] }</td>
                        <td>{ array_data["12"][-2][-7] }</td>
                        <td>{ array_data["12"][-2][-6] }</td>
                        <td>{ array_data["12"][-2][-5] }</td>
                        <td>{ array_data["12"][-2][-4] }</td>
                        <td>{ array_data["12"][-2][-3] }</td>
                        <td>{ array_data["12"][-2][-2] }</td>
                        <td className={classes.green}>100%</td>
                        <td className={classes.green}></td>
                      </tr>
                      
                      <tr>
                        <td className={classes.green}>{ array_res["12"][-1]['name'] }</td>
                        <td className={classes.lightgray}>{ array_res["12"][-1]['r_print'] }</td>
                        <td>{ array_data["12"][-1][-12] }</td>
                        <td>{ array_data["12"][-1][-11] }</td>
                        <td>{ array_data["12"][-1][-10] }</td>
                        <td>{ array_data["12"][-1][-9] }</td>
                        <td>{ array_data["12"][-1][-8] }</td>
                        <td>{ array_data["12"][-1][-7] }</td>
                        <td>{ array_data["12"][-1][-6] }</td>
                        <td>{ array_data["12"][-1][-5] }</td>
                        <td>{ array_data["12"][-1][-4] }</td>
                        <td>{ array_data["12"][-1][-3] }</td>
                        <td>{ array_data["12"][-1][-2] }</td>
                        <td>{ array_data["12"][-1][-1] }</td>
                        <td></td>
                      </tr>
                      
                      
                      <tr className={classes.bluedark}>
                        <td colSpan={2}>Результат</td>
                        <td>{ printResArchive("-12", array_data) }</td>
                        <td>{ printResArchive("-11", array_data) }</td>
                        <td>{ printResArchive("-10", array_data) }</td>
                        <td>{ printResArchive("-9", array_data) }</td>
                        <td>{ printResArchive("-8", array_data) }</td>
                        <td>{ printResArchive("-7", array_data) }</td>
                        <td>{ printResArchive("-6", array_data) }</td>
                        <td>{ printResArchive("-5", array_data) }</td>
                        <td>{ printResArchive("-4", array_data) }</td>
                        <td>{ printResArchive("-3", array_data) }</td>
                        <td>{ printResArchive("-2", array_data) }</td>
                        <td>{ printResArchive("-1", array_data) }</td>
                        <td></td>
                      </tr>
                      
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>



        )}
      </div>
    </div>
  );
};
