// ============================================
// HUVUDLOGIK FÖR STARTSIDAN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Startar initiering...');
    initializeHomepage();
    setupMobileMenu();
});

function initializeHomepage() {
    // Använd chapters (med liten bokstav) som i din chapters.js
    const CHAPTERS = typeof chapters !== 'undefined' ? chapters : (typeof CHAPTERS !== 'undefined' ? CHAPTERS : null);
    
    if (!CHAPTERS || typeof ProgressManager === 'undefined') {
        console.error('❌ Saknade beroenden:', {
            chapters: typeof chapters,
            CHAPTERS: typeof CHAPTERS,
            ProgressManager: typeof ProgressManager
        });
        return; // Sluta försöka - något är fel med skriptinläsningen
    }
    
    console.log('✅ Alla beroenden laddade');
    renderChapters(CHAPTERS);
    updateStatistics(CHAPTERS);
    renderKnowledgeBars(CHAPTERS);
}

// Rendera kapitelkort
function renderChapters(CHAPTERS) {
    const grid = document.getElementById('chaptersGrid');
    if (!grid) {
        console.log('⚠️ Element "chaptersGrid" finns inte på denna sida');
        return;
    }
    
    console.log('📝 Renderar kapitelkort...');
    
    grid.innerHTML = CHAPTERS.map(chapter => {
        const progress = ProgressManager.getChapterProgress(chapter.id || chapter.number);
        const knowledge = progress.bestScore || 0;
        
        let progressClass = '';
        if (knowledge >= 70) progressClass = 'good';
        else if (knowledge >= 40) progressClass = 'medium';
        else if (knowledge > 0) progressClass = 'low';
        
        // Stöd både chapter.slug och chapter.id
        const chapterId = chapter.id || chapter.number;
        const chapterSlug = chapter.slug || `kapitel-${chapterId}`;
        
        return `
            <a href="pages/chapters/${chapterSlug}.html" class="chapter-card">
                <div class="chapter-header">
                    <div class="chapter-number ${knowledge >= 70 ? 'completed' : ''}">${chapterId}</div>
                    <div>
                        <div class="chapter-title">${chapter.title}</div>
                        <div class="chapter-meta-small">${chapter.estimatedTime} • ${chapter.questionCount} frågor</div>
                    </div>
                </div>
                <p class="chapter-description">${chapter.description}</p>
                <div class="chapter-progress">
                    <div class="progress-bar">
                        <div class="progress-fill ${progressClass}" style="width: ${knowledge}%"></div>
                    </div>
                    <span class="progress-text">${knowledge}%</span>
                </div>
            </a>
        `;
    }).join('');
}

// Uppdatera statistik på startsidan
function updateStatistics(CHAPTERS) {
    const stats = ProgressManager.getOverallStats();
    
    console.log('📊 Uppdaterar statistik:', stats);
    
    // Uppdatera stat-kort
    const chaptersCompleted = document.getElementById('chaptersCompleted');
    if (chaptersCompleted) {
        const completedCount = CHAPTERS.filter(ch => {
            const progress = ProgressManager.getChapterProgress(ch.id || ch.number);
            return progress.bestScore >= 70;
        }).length;
        chaptersCompleted.textContent = `${completedCount}/10`;
    }
    
    const questionsAnswered = document.getElementById('questionsAnswered');
    if (questionsAnswered) {
        questionsAnswered.textContent = stats.totalQuestionsAnswered || 0;
    }
    
    const averageScore = document.getElementById('averageScore');
    if (averageScore) {
        averageScore.textContent = `${stats.averageScore || 0}%`;
    }
    
    const examReady = document.getElementById('examReady');
    if (examReady) {
        if (stats.isExamReady) {
            examReady.textContent = 'Redo!';
            examReady.style.color = '#22c55e';
            examReady.style.fontWeight = '700';
        } else if (stats.certExams && stats.certExams.total > 0) {
            examReady.textContent = 'Snart...';
            examReady.style.color = '#f59e0b';
        } else {
            examReady.textContent = 'Ej redo';
            examReady.style.color = '#64748b';
        }
    }
}

// Rendera kunskapsstaplar
function renderKnowledgeBars(CHAPTERS) {
    const container = document.getElementById('knowledgeBars');
    if (!container) {
        console.log('⚠️ Element "knowledgeBars" finns inte på denna sida');
        return;
    }
    
    console.log('📊 Renderar kunskapsstaplar...');
    
    container.innerHTML = CHAPTERS.map(chapter => {
        const progress = ProgressManager.getChapterProgress(chapter.id || chapter.number);
        const knowledge = progress.bestScore || 0;
        
        let progressClass = '';
        if (knowledge >= 70) progressClass = 'good';
        else if (knowledge >= 40) progressClass = 'medium';
        else if (knowledge > 0) progressClass = 'low';
        
        return `
            <div class="knowledge-item">
                <div class="knowledge-header">
                    <span class="knowledge-label">${chapter.shortTitle}</span>
                    <span class="knowledge-value">${knowledge}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill ${progressClass}" style="width: ${knowledge}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// MOBILMENY
// ============================================

function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuBtn || !navLinks) {
        console.log('⚠️ Mobilmeny-element saknas');
        return;
    }
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Stäng menyn när man klickar på en länk
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

    // Stäng menyn när man klickar utanför
    document.addEventListener('click', function(e) {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

// Smooth scroll för ankarlänkar
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return; // Skippa tomma hash-länkar
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ============================================
// SERVICE WORKER (OFFLINE-STÖD)
// ============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('✅ Service Worker registrerad'))
            .catch(err => console.log('⚠️ Service Worker kunde inte registreras:', err.message));
    });
}

// ============================================
// UTILITY-FUNKTIONER
// ============================================

// Formatera tid
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Slumpa array (Fisher-Yates)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Exportera för användning i andra skript
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatTime, shuffleArray };
}

console.log('✅ main.js laddad');