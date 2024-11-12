import { LightningElement, api, track } from 'lwc';

export default class PaginationComponent extends LightningElement {
    @api currentPage = 1;
    @api totalPages = 10;
    @track visiblePages = [];

    connectedCallback() {
        this.updateVisiblePages();
    }

    // Update the visible pages array to show a sliding window of 5 pages
    updateVisiblePages() {
        const visiblePages = [];
        const maxVisiblePages = 5;
        
        // Calculate start and end of the page window
        let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

        // Adjust startPage if we’re at the end of the pagination range
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push({
                label: i,
                value: i,
                variant: this.currentPage === i ? 'brand' : 'neutral'
            });
        }

        this.visiblePages = visiblePages;
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
            this.updateVisiblePages();
            this.notifyPageChange();
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.updateVisiblePages();
            this.notifyPageChange();
        }
    }

    handlePageClick(event) {
        const selectedPage = parseInt(event.target.value, 10);
        if (selectedPage !== this.currentPage) {
            this.currentPage = selectedPage;
            this.updateVisiblePages();
            this.notifyPageChange();
        }
    }

    notifyPageChange() {
        const pageChangeEvent = new CustomEvent('pagechange', { detail: this.currentPage });
        this.dispatchEvent(pageChangeEvent);
    }
    // handlePageChange(event) {
    //     this.currentPage = event.detail;
    //     this.calculateRange(); // or any other logic needed to update data on page change
    // }
}
// @api currentPage = 1;
//     @api totalPages = 10;
//     @track visiblePages = [];

//     connectedCallback() {
//         this.updateVisiblePages();
//     }

//     // Updates visiblePages with a sliding window and adds ellipsis where appropriate
//     updateVisiblePages() {
//         const pages = [];
//         const maxVisiblePages = 5; // Maximum number of pages shown in the sliding window

//         // Show first page always
//         pages.push({ label: 1, value: 1, variant: this.currentPage === 1 ? 'brand' : 'neutral' });

//         // Calculate range to display around the current page
//         let startPage = Math.max(2, this.currentPage - Math.floor(maxVisiblePages / 2));
//         let endPage = Math.min(this.totalPages - 1, startPage + maxVisiblePages - 1);

//         // Adjust startPage if we are close to the end
//         if (endPage === this.totalPages - 1) {
//             startPage = Math.max(2, endPage - maxVisiblePages + 1);
//         }

//         // Add ellipsis if there are more pages before the start of the sliding window
//         if (startPage > 2) {
//             pages.push({ label: '...', value: 'ellipsis', disabled: true });
//         }

//         // Add pages within the sliding window
//         for (let i = startPage; i <= endPage; i++) {
//             pages.push({
//                 label: i,
//                 value: i,
//                 variant: this.currentPage === i ? 'brand' : 'neutral'
//             });
//         }

//         // Add ellipsis if there are more pages after the end of the sliding window
//         if (endPage < this.totalPages - 1) {
//             pages.push({ label: '...', value: 'ellipsis', disabled: true });
//         }

//         // Show last page always
//         if (this.totalPages > 1) {
//             pages.push({
//                 label: this.totalPages,
//                 value: this.totalPages,
//                 variant: this.currentPage === this.totalPages ? 'brand' : 'neutral'
//             });
//         }

//         this.visiblePages = pages;
//     }

//     get isPreviousDisabled() {
//         return this.currentPage === 1;
//     }

//     get isNextDisabled() {
//         return this.currentPage === this.totalPages;
//     }

//     previousPage() {
//         if (this.currentPage > 1) {
//             this.currentPage--;
//             this.updateVisiblePages();
//             this.notifyPageChange();
//         }
//     }

//     nextPage() {
//         if (this.currentPage < this.totalPages) {
//             this.currentPage++;
//             this.updateVisiblePages();
//             this.notifyPageChange();
//         }
//     }

//     handlePageClick(event) {
//         const selectedPage = parseInt(event.target.value, 10);
//         if (!isNaN(selectedPage) && selectedPage !== this.currentPage) {
//             this.currentPage = selectedPage;
//             this.updateVisiblePages();
//             this.notifyPageChange();
//         }
//     }

//     notifyPageChange() {
//         const pageChangeEvent = new CustomEvent('pagechange', { detail: this.currentPage });
//         this.dispatchEvent(pageChangeEvent);
//     }