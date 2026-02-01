/**
 * Radioskola.se - Böcker-hantering
 * Hanterar expansion/kollaps av boksektion och dynamisk kapitelgenerering
 */

(function() {
    'use strict';

    // Vänta tills DOM är redo
    document.addEventListener('DOMContentLoaded', initBooks);

    function initBooks() {
        setupBookToggle();
        loadCertificateChapters();
    }

    /**
     * Sätter upp klick-hantering för att expandera/kollapsa böcker
     */
    function setupBookToggle() {
        const bookHeaders = document.querySelectorAll('.book-header');
        
        bookHeaders.forEach(header => {
            header.addEventListener('click', function(e) {
                // Förhindra att klick på länkar i headern triggar toggle
                if (e.target.tagName === 'A') return;
                
                const bookCard = this.closest('.book-card');
                toggleBook(bookCard);
            });

            // Tangentbordsnavigation
            header.setAttribute('tabindex', '0');
            header.setAttribute('role', 'button');
            header.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const bookCard = this.closest('.book-card');
                    toggleBook(bookCard);
                }
            });
        });
    }

    /**
     * Toggla en boks expanderade tillstånd
     * @param {HTMLElement} bookCard - Bok-elementet att toggla
     */
    function toggleBook(bookCard) {
        const isExpanded = bookCard.classList.contains('expanded');
        
        // Valfritt: Stäng andra öppna böcker först (accordion-beteende)
        // Kommentera bort om du vill att flera böcker kan vara öppna samtidigt
        /*
        document.querySelectorAll('.book-card.expanded').forEach(card => {
            if (card !== bookCard) {
                card.classList.remove('expanded');
            }
        });
        */
        
        bookCard.classList.toggle('expanded');
        
        // Uppdatera ARIA-attribut för tillgänglighet
        const header = bookCard.querySelector('.book-header');
        header.setAttribute('aria-expanded', !isExpanded);
        
        // Scrolla ner till boken om den öppnas
        if (!isExpanded) {
            setTimeout(() => {
                bookCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }

    /**
     * Laddar certifikat-kapitel dynamiskt från chapters.js
     */
    function loadCertificateChapters() {
        const chaptersList = document.getElementById('certChaptersList');
        if (!chaptersList) return;

        // Kontrollera om chapters-data finns
        if (typeof chapters === 'undefined' || !Array.isArray(chapters)) {
            chaptersList.innerHTML = `
                <h4>Kapitel i denna bok</h4>
                <p class="loading-message">Kapiteldata kunde inte laddas.</p>
            `;
            return;
        }

        // Bygg kapitel-HTML
        let html = '<h4>Kapitel i denna bok</h4>';
        
        chapters.forEach(chapter => {
            const time = chapter.estimatedTime || 30;
            const slug = chapter.slug || `kapitel-${chapter.number}`;
            
            html += `
                <a href="pages/chapters/${slug}.html" class="chapter-link">
                    <span class="chapter-num">${chapter.number}</span>
                    <span class="chapter-title">${chapter.title}</span>
                    <span class="chapter-time">🕐 ${time} min</span>
                </a>
            `;
        });

        chaptersList.innerHTML = html;
    }

    // Exportera för eventuell extern användning
    window.RadioBooks = {
        toggle: toggleBook,
        reload: loadCertificateChapters
    };

})();

