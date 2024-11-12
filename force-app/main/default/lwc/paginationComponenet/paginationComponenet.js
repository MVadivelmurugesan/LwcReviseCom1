import { LightningElement,api,track } from 'lwc';

export default class PaginationComponenet extends LightningElement {
    @api currentPage = 1;
    @api totalPages = 1;

    get pages() {
        let pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
            pages.push({
                label: i,
                value: i,
                variant: this.currentPage === i ? 'brand' : 'neutral'
            });
        }
        return pages;
    }

    get isPreviousDisabled() {
        return this.currentPage === 1;
    }

    get isNextDisabled() {
        return this.currentPage === this.totalPages;
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.notifyPageChange();
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.notifyPageChange();
        }
    }

    handlePageClick(event) {
        const selectedPage = parseInt(event.target.value, 10);
        if (selectedPage !== this.currentPage) {
            this.currentPage = selectedPage;
            this.notifyPageChange();
        }
    }

    notifyPageChange() {
        const pageChangeEvent = new CustomEvent('pagechange', { detail: this.currentPage });
        this.dispatchEvent(pageChangeEvent);
    }

    // handlePageChange(event) { -- parent component will pass the total pages and current page number
    //     this.currentPage = event.detail;
    //     this.calculateRange(); // or any other logic needed to update data on page change
    // }
}