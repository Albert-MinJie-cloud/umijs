import { Button } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './index.less';

const request = axios.create();

request.interceptors.request.use(
  (config) => {
    console.log({ config });

    return {
      ...config,
      referrer:
        'https://jav.guru/searcho/?od=c6d64786e23783b676a686a67657d68713d2465626d656&bg=https%3A%2F%2Fjav.guru%2Fwp-content%2Fuploads%2F2023%2F03%2Fjuq219pl.jpg',
    };
  },
  (error) => {
    return error;
  },
);

// https://s1.maxstream.org/hls2/01/00001/1xmugjhjgk8s_n/encryption.key?t=BiV4N38vqNl3z3xvhWjXsySJj5hbNaknpsDWFiy0M0k&s=1686242306&e=43200&f=8432&i=170.178
// https://s1.maxstream.org/hls2/01/00001/1xmugjhjgk8s_n/index-v1-a1.m3u8?t=BiV4N38vqNl3z3xvhWjXsySJj5hbNaknpsDWFiy0M0k&s=1686242306&e=43200&f=8432&i=170.178

const Down = () => {
  const [html, setHtml] = useState(null);
  const [urlList, setUrlList] = useState([]);

  const getList = () => {
    setHtml(null);
    request
      .get('https://jav.guru/category/english-subbed/')
      .then(function (response) {
        console.log({ response });
        const data = response.data;
        console.log({ data }, typeof data);
        setHtml(data);
      })
      .catch(function (error) {
        console.log(error);
        setHtml(null);
      });
  };

  const getListItem = () => {
    const newList = document.querySelectorAll('.grid1');
    console.log('newList', newList);
    const titleItemList = [];
    newList?.forEach((el) => {
      const aEl = el?.firstElementChild?.firstElementChild as any;
      const { title, href } = aEl;
      console.log('newList', { title, href });
      titleItemList.push({ title: href });
    });
  };

  const newA = () => {
    axios
      .get(
        'https://jav.guru/searcho/?od=c6d64786e23783b676a686a67657d68713d2465626d656&bg=https%3A%2F%2Fjav.guru%2Fwp-content%2Fuploads%2F2023%2F03%2Fjuq219pl.jpg',
      )
      .then(function (response) {
        console.log({ response });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const newB = () => {
    fetch(
      'https://jav.guru/searcho/?or=656d6265642d31786d75676a686a676b38732e68746d6c',
      {
        headers: {
          'sec-fetch-dest': 'iframe',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1',
        },
        referrer:
          'https://jav.guru/searcho/?od=c6d64786e23783b676a686a67657d68713d2465626d656&bg=https%3A%2F%2Fjav.guru%2Fwp-content%2Fuploads%2F2023%2F03%2Fjuq219pl.jpg',
      },
    )
      .then(function (response: any) {
        console.log({ response });
      })
      .catch(function (error: any) {
        console.log({ error });
      });
  };

  useEffect(() => {
    getListItem();
  }, [html]);

  return (
    <div>
      <Button onClick={getList}>1</Button>
      <Button onClick={newA}>mewA</Button>
      <Button onClick={newB}>newB</Button>

      {html && (
        <>
          <div className="iframe" dangerouslySetInnerHTML={{ __html: html }} />
          <div>1</div>
        </>
      )}
    </div>
  );
};

export default Down;
