/**
 * КОНФИГ ДЛЯ TILDA
 * 
 * Скопируй эти URL в свой HTML код на Tilda.
 * Данные загружаются с GitHub.
 */

// ═══════════════════════════════════════════════════════════
// URL ДАННЫХ — вставь в код карты на Tilda
// ═══════════════════════════════════════════════════════════

const DATA_URLS = {
    // Провалы (с фотографиями)
    real: 'https://raw.githubusercontent.com/AzatSkyArchLab/ufa_karst_map_data/main/data/karst_sinkholes.geojson',
    
    // Зоны карста (из книги)
    book: 'https://raw.githubusercontent.com/AzatSkyArchLab/ufa_karst_map_data/main/data/karst_areas.geojson'
};

// ═══════════════════════════════════════════════════════════
// КНОПКИ ДЛЯ ДОБАВЛЕНИЯ В INFO-PANEL
// ═══════════════════════════════════════════════════════════

/*
<!-- Кнопка "Сообщить о провале" -->
<a href="https://github.com/AzatSkyArchLab/ufa_karst_map_data/issues/new?template=new-sinkhole.yml" 
   target="_blank" 
   class="action-btn primary">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
    </svg>
    Сообщить о провале
</a>

<!-- Кнопка "Скачать данные" -->
<a href="https://raw.githubusercontent.com/AzatSkyArchLab/ufa_karst_map_data/main/data/karst_sinkholes.geojson" 
   download="karst_sinkholes.geojson"
   class="action-btn secondary">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
    Скачать данные
</a>

<!-- Ссылка на GitHub -->
<a href="https://github.com/AzatSkyArchLab/ufa_karst_map_data" 
   target="_blank" 
   class="info-link">
    GitHub
</a>
*/

// ═══════════════════════════════════════════════════════════
// CSS ДЛЯ КНОПОК (добавь в стили)
// ═══════════════════════════════════════════════════════════

/*
.action-buttons {
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
}

.action-btn.primary {
    background: #e63946;
    color: white;
}

.action-btn.primary:hover {
    background: #d62839;
    transform: translateY(-1px);
}

.action-btn.secondary {
    background: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
}

.action-btn.secondary:hover {
    background: var(--bg-hover);
}
*/
