import axios from 'axios';
import { Component } from 'react';
import CustomCookieHelper from './components/Helper';

class UrlService extends Component {
    async getData(apiURLs) {
        let url = 'https://www.sword-capital.com/dev/wp/wp-json/wp/v2/';
        const selectedLang = CustomCookieHelper.HelperGetLang("selectLang");
        this.apiURL = url + apiURLs[selectedLang];
        try {
            console.log(this.apiURL)
            const response = await axios.get(this.apiURL);
            return response;
        } catch (error) {
            console.error("Not able to fetch the data");
        }
    }
}

export default new UrlService();