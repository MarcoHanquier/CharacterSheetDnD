import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

import { IclassFeatures } from './class-features';


@Injectable({
  providedIn: 'root'
})
export class ClassFeaturesService {
  private _url:string = "/assets/data/classFeatures.json";

  public classFeature = "";
  public bonusSkill = "";
  public paladinCanalisationDivine = "";
  public subClassToolMasteries = "";
  public subClassSkillMasteries = "";
  public subClassLangages = "";
  public clercCanalisationDivine = "";
  public clercCanalisationDivine2 = "";
public selectedArchetypeName = "";

public archetypeFeatureLevel1 = "";
public archetypeFeatureLevel2 = "";
public archetypeFeatureLevel3 = "Maîtrise d'outils, Sorts d'Alchimiste, Élixir expérimental";
// public archetypeFeatureLevel4 = "";
public archetypeFeatureLevel5 = "Érudit alchimique";
public archetypeFeatureLevel6 = "";
public archetypeFeatureLevel7 = "";
public archetypeFeatureLevel8 = "";
public archetypeFeatureLevel9 = "Ingrédients revigorants";
public archetypeFeatureLevel10 = "";
public archetypeFeatureLevel11 = "";
// public archetypeFeatureLevel12 = "";
public archetypeFeatureLevel13 = "";
public archetypeFeatureLevel14 = "";
public archetypeFeatureLevel15 = "Maîtrise chimique";
// public archetypeFeatureLevel16 = "";
public archetypeFeatureLevel17 = "";
public archetypeFeatureLevel18 = "";
// public archetypeFeatureLevel19 = "";
public archetypeFeatureLevel20 = "";


    public classFeatureLevel1 = "";
    public classFeatureLevel2 = "";
    public classFeatureLevel3 = "";
    public classFeatureLevel4 = "";
    public classFeatureLevel5 = "";
    public classFeatureLevel6 = "";
    public classFeatureLevel7 = "";
    public classFeatureLevel8 = "";
    public classFeatureLevel9 = "";
    public classFeatureLevel10 = "";
    public classFeatureLevel11 = "";
    public classFeatureLevel12 = "";
    public classFeatureLevel13 = "";
    public classFeatureLevel14 = "";
    public classFeatureLevel15 = "";
    public classFeatureLevel16 = "";
    public classFeatureLevel17 = "";
    public classFeatureLevel18 = "";
    public classFeatureLevel19 = "";
    public classFeatureLevel20 = "";
 
    public bonusSkillLevel1 = "";
    public bonusSkillLevel2 = "";
    public bonusSkillLevel3 = "";
    public bonusSkillLevel4 = "";
    public bonusSkillLevel5 = "";
    public bonusSkillLevel6 = "";
    public bonusSkillLevel7 = "";
    public bonusSkillLevel8 = "";
    public bonusSkillLevel9 = "";
    public bonusSkillLevel10 = "";
    public bonusSkillLevel11 = "";
    public bonusSkillLevel12 = "";
    public bonusSkillLevel13 = "";
    public bonusSkillLevel14 = "";
    public bonusSkillLevel15 = "";
    public bonusSkillLevel16 = "";
    public bonusSkillLevel17 = "";
    public bonusSkillLevel18 = "";
    public bonusSkillLevel19 = "";
    public bonusSkillLevel20 = "";

  constructor(private http:HttpClient) { }

getClassFeatures(): Observable<IclassFeatures[]> {
  return this.http.get<IclassFeatures[]>(this._url);
}

// Met à jour les aptitudes en fonction de l'archétype choisi

getArtificierArchetypes() {
  return [
    {id: 0, source:"Le Chaudron des Merveilles de Tasha", name:"Alchimiste", archetypeFeatureLevel3: "Maîtrise d'outils, Sorts d'Alchimiste, Élixir expérimental", archetypeFeatureLevel5: "Érudit alchimique", archetypeFeatureLevel9: "Ingrédients revigorants", archetypeFeatureLevel15: "Maîtrise chimique"},
    {id: 1, source:"Le Chaudron des Merveilles de Tasha", name:"Armurier", archetypeFeatureLevel3: "Techniques du métier, Sorts d'Armurier, Armure arcanique, Modèle d'armure (Gardien, Infiltré)", archetypeFeatureLevel5: "Attaque supplémentaire", archetypeFeatureLevel9: "Modifications d'armure", archetypeFeatureLevel15: "Armure parachevée"},
    {id: 2, source:"Le Chaudron des Merveilles de Tasha", name:"Artilleur", archetypeFeatureLevel3: "Maîtrise d'outils, Sorts d'Artilleur, Canon occulte", archetypeFeatureLevel5: "Arme à feu arcanique", archetypeFeatureLevel9: "Canon explosif", archetypeFeatureLevel15: "Position fortifiée"},
    {id: 3, source:"Le Chaudron des Merveilles de Tasha", name:"Forgeron de guerre", archetypeFeatureLevel3: "Maîtrise d'outils, Sorts de Forgeron de guerre, Apte au combat, Défenseur d'acier", archetypeFeatureLevel5: "Attaque supplémentaire", archetypeFeatureLevel9: "Décharge arcanique", archetypeFeatureLevel15: "Défenseur amélioré"},
  ]
}

getBarbareArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Berserker", archetypeFeatureLevel3: "Frénésie", archetypeFeatureLevel6: "Rage aveugle", archetypeFeatureLevel10: "Présence intimidante", archetypeFeatureLevel14: "Représailles"},
    {id: 1, source:"Manuel des Joueurs", name:"Guerrier Totémique", archetypeFeatureLevel3: "Quêteur spirituel, Totem spirituel", archetypeFeatureLevel6: "Aspect de la bête", archetypeFeatureLevel10: "Marcheur spirituel", archetypeFeatureLevel14: "Harmonisation totémique"},
    {id: 2, source:"Le Guide Complet de Xanathar", name:"Gardien Ancestral", archetypeFeatureLevel3: "Protecteurs ancestraux", archetypeFeatureLevel6: "Bouclier spirituel (2d6)", archetypeFeatureLevel10: "Briseur de sort", archetypeFeatureLevel14: "Rage froide"},
    {id: 3, source:"Le Guide Complet de Xanathar", name:"Héraut des tempêtes", archetypeFeatureLevel3: "Aura de tempête", archetypeFeatureLevel6: "Âme des tempêtes", archetypeFeatureLevel10: "Tempête protectrice", archetypeFeatureLevel14: "Tempête déchainée"},
    {id: 4, source:"Le Guide Complet de Xanathar", name:"Zélote", archetypeFeatureLevel3: "Fureur divine, Guerrier des dieux", archetypeFeatureLevel6: "Obstination fanatique", archetypeFeatureLevel10: "Présence zélatrice", archetypeFeatureLevel14: "Enragé par-delà la mort"},
    {id: 5, source:"Le Chaudron des Merveilles de Tasha", name:"Bête", archetypeFeatureLevel3: "Forme de la bête", archetypeFeatureLevel6: "Âme bestiale", archetypeFeatureLevel10: "Fureur contagieuse", archetypeFeatureLevel14: "Hallali"},
    {id: 6, source:"Le Chaudron des Merveilles de Tasha", name:"Magie Sauvage", archetypeFeatureLevel3: "Conscience magique, Accès sauvage", archetypeFeatureLevel6: "Magie galvanisante", archetypeFeatureLevel10: "Riposte capricieuse", archetypeFeatureLevel14: "Sauvagerie contrôlée"},
    {id: 7, source:"La Côte des Épées", name:"Fou de guerre", archetypeFeatureLevel3: "Armure du Fou de guerre", archetypeFeatureLevel6: "Insouciance", archetypeFeatureLevel10: "Charge du Fou de guerre", archetypeFeatureLevel14: "Représailles pointues"}
  ]
}

getBardeArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Savoir", archetypeFeatureLevel3: "3 Maîtrises supplémentaires, Mots cinglants", archetypeFeatureLevel6: "Secrets magiques supplémentaires", archetypeFeatureLevel14: "Compétence hors pair"},
    {id: 1, source:"Manuel des Joueurs", name:"Vaillance", archetypeFeatureLevel3: "Maîtrises supplémentaires, Inspiration martiale", archetypeFeatureLevel6: "Attaque supplémentaire", archetypeFeatureLevel14: "Magie guerrière"},
    {id: 2, source:"Le Chaudron des Merveilles de Tasha", name:"Création", archetypeFeatureLevel3: "Grain de potentiel, Créativité concrète", archetypeFeatureLevel6: "Prestation dansante", archetypeFeatureLevel14: "Crescendo créatif"},
    {id: 3, source:"Le Chaudron des Merveilles de Tasha", name:"Eloquence", archetypeFeatureLevel3: "Faconde, Paroles déstabilisantes", archetypeFeatureLevel6: "Inspiration indéfectible, Discours universel", archetypeFeatureLevel14: "Inspiration contagieuse"},
    {id: 4, source:"Le Guide Complet de Xanathar", name:"Séduction", archetypeFeatureLevel3: "Apparence inspirante, Représentation envoutante", archetypeFeatureLevel6: "Apparence majestueuse", archetypeFeatureLevel14: "Majesté inébranlable"},
    {id: 5, source:"Le Guide Complet de Xanathar", name:"Épées", archetypeFeatureLevel3: "Maîtrise supplémentaire, Style de combat, Moulinet", archetypeFeatureLevel6: "Attaque supplémentaire",archetypeFeatureLevel14: "Moulinet de maître"},
    {id: 6, source:"Le Guide Complet de Xanathar", name:"Murmures", archetypeFeatureLevel3: "Lames psychiques, Mots de terreur", archetypeFeatureLevel6: "Voile de murmures", archetypeFeatureLevel14: "Savoir des ombres"},
    {id: 7, source:"Le guide de Van Richten sur Ravenloft", name:"Esprits", archetypeFeatureLevel3: "Murmures diligents, Focaliseur spirituel, Contes de l'Au-delà", archetypeFeatureLevel6: "Séance de spiritisme", archetypeFeatureLevel14: "Lien mystique"}

  ]
}

getClercArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Guerre", archetypeFeatureLevel1: "Sorts de domaine, Maîtrises supplémentaires, Prêtre de guerre", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Canalisation d'énergie divine", archetypeFeatureLevel8: "Frappe divine (1d8)", archetypeFeatureLevel14: "Frappe divine (2d8)", archetypeFeatureLevel17: "Avatar de la bataile", clercCanalisationDivine: "Frappe guidée", clercCanalisationDivine2: "Bénédiction du dieu de la Guerre"},
    {id: 1, source:"Manuel des Joueurs", name:"Lumière", archetypeFeatureLevel1: "Sorts de domaine, Tour de magie supplémentaire, Illumination protectrice", archetypeFeatureLevel2: "Canalisation d'énergie divine",  archetypeFeatureLevel6: "Illumination améliorée", archetypeFeatureLevel8: "Incantation puissante", archetypeFeatureLevel17: "Halo de lumière", clercCanalisationDivine: "Aube radieuse", clercCanalisationDivine2: ""},
    {id: 2, source:"Manuel des Joueurs", name:"Nature", archetypeFeatureLevel1: "Sorts de domaine, Maîtrise supplémentaire, Acolyte de la nature", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Atténuer les éléments", archetypeFeatureLevel8: "Frappe divine (1d8)", archetypeFeatureLevel14: "Frappe divine (2d8)", archetypeFeatureLevel17: "Maître de la nature", clercCanalisationDivine: "Charmer les animaux et les plantes", clercCanalisationDivine2: ""},
    {id: 3, source:"Manuel des Joueurs", name:"Ruse", archetypeFeatureLevel1: "Sorts de domaine, Bénédiction de l'escroc", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Canalisation d'énergie divine", archetypeFeatureLevel8: "Frappe divine (1d8)", archetypeFeatureLevel14: "Frappe divine (2d8)", archetypeFeatureLevel17: "Duplicata amélioré", clercCanalisationDivine: "Invocation de duplicata", clercCanalisationDivine2: "Linceul d'ombre"},
    {id: 4, source:"Manuel des Joueurs", name:"Savoir", archetypeFeatureLevel1: "Sorts de domaine, Bénédictions du savoir", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Canalisation d'énergie divine", archetypeFeatureLevel8: "Incantation puissante", archetypeFeatureLevel17: "Vision du passé", clercCanalisationDivine: "Connaissances du passé", clercCanalisationDivine2: "Lecture des pensées"},
    {id: 5, source:"Manuel des Joueurs", name:"Tempête", archetypeFeatureLevel1: "Sorts de domaine, Maîtrises supplémentaires, Fureur de l'ouragan", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Frappe tonnante", archetypeFeatureLevel8: "Frappe divine (1d8)", archetypeFeatureLevel14: "Frappe divine (2d8)", archetypeFeatureLevel17: "Né des tempêtes", clercCanalisationDivine: "Fureur destructrice", clercCanalisationDivine2: ""},
    {id: 6, source:"Manuel des Joueurs", name:"Vie", archetypeFeatureLevel1: "Sorts de domaine, Maîtrises supplémentaires, Disciple de la vie", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Guerisseur béni", archetypeFeatureLevel8: "Frappe divine (1d8)", archetypeFeatureLevel14: "Frappe divine (2d8)", archetypeFeatureLevel17: "Guérison suprême", clercCanalisationDivine: "Préserver la vie", clercCanalisationDivine2: ""},
    {id: 7, source:"Le Guide du Maître", name:"Mort", archetypeFeatureLevel1: "Sorts de domaine, Maîtrises supplémentaires, Faucheur", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Destruction inéluctable", archetypeFeatureLevel8: "Frappe divine (1d8)", archetypeFeatureLevel14: "Frappe divine (2d8)", archetypeFeatureLevel17: "Faucheur amélioré", clercCanalisationDivine: "Caresse de la mort", clercCanalisationDivine2: ""},
    {id: 8, source:"Le Chaudron des Merveilles de Tasha", name:"Crépuscule", archetypeFeatureLevel1: "Sorts de domaine, Maîtrises supplémentaires, Yeux de la nuit, Faveur de vigilance", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Foulée nocturne", archetypeFeatureLevel8: "Frappe divine (1d8)", archetypeFeatureLevel14: "Frappe divine (2d8)", archetypeFeatureLevel17: "Linceul Crépusculaire", clercCanalisationDivine: "Sanctuaire du crépuscule", clercCanalisationDivine2: ""},
    {id: 9, source:"Le Chaudron des Merveilles de Tasha", name:"Ordre", archetypeFeatureLevel1: "Sorts de domaine, Maîtrises supplémentaires, Voix de l'autorité", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "La loi incarnée", archetypeFeatureLevel8: "Frappe divine (1d8)", archetypeFeatureLevel14: "Frappe divine (2d8)", archetypeFeatureLevel17: "Courroux de l'ordre", clercCanalisationDivine: "Règne de l'ordre", clercCanalisationDivine2: ""},
    {id: 10, source:"Le Guide Complet de Xanathar", name:"Forge", archetypeFeatureLevel1: "Sorts de domaine, Maîtrises supplémentaires, Bénédiction de la forge", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Âme de la forge", archetypeFeatureLevel8: "Frappe divine (1d8)", archetypeFeatureLevel14: "Frappe divine (2d8)", archetypeFeatureLevel17: "Saint de la forge et du feu", clercCanalisationDivine: "Bénédiction de l'artisan", clercCanalisationDivine2: ""},
    {id: 11, source:"Le Guide Complet de Xanathar", name:"Tombe", archetypeFeatureLevel1: "Sorts de domaine, Cercle de la mort, Oeil de la tombe", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "La sentinelle au seuil de la mort", archetypeFeatureLevel8: "Incantation puissante", archetypeFeatureLevel14: "", archetypeFeatureLevel17: "Gardien des ames", clercCanalisationDivine: "Le chemin de la tombe", clercCanalisationDivine2: ""},
    {id: 12, source:"Le Chaudron des Merveilles de Tasha", name:"Paix", archetypeFeatureLevel1: "Sorts de domaine, Instrument de la paix, Lien de hardiesse", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Lien protecteur", archetypeFeatureLevel8: "Incantation puissante", archetypeFeatureLevel17: "Lien étendu", clercCanalisationDivine: "Baume de la paix", clercCanalisationDivine2: ""},
    {id: 13, source:"La Côte des Épées", name:"Arcane", archetypeFeatureLevel1: "Sorts de domaine, Initié des arcanes", archetypeFeatureLevel2: "Canalisation d'énergie divine", archetypeFeatureLevel6: "Briseur de sorts", archetypeFeatureLevel8: "Incantation puissante", archetypeFeatureLevel17: "Maîtrise des arcanes", clercCanalisationDivine: "Abjuration des arcanes", clercCanalisationDivine2: ""}
  ]
}

getDruideArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Terre", archetypeFeatureLevel2: "Tour de magie bonus, Récupération naturelle", archetypeFeatureLevel6: "Traversée des terrains", archetypeFeatureLevel10: "Enfant de la nature", archetypeFeatureLevel14: "Sanctuaire de la nature"},
    {id: 1, source:"Manuel des Joueurs", name:"Lune", archetypeFeatureLevel2: "Forme sauvage de combat, Formes du cercle", archetypeFeatureLevel6: "Frappe primitive", archetypeFeatureLevel10: "Forme sauvage élémentaire", archetypeFeatureLevel14: "Mille visages"},
    {id: 2, source:"Le Guide Complet de Xanathar", name:"Rêves", archetypeFeatureLevel2: "Baume de la cour d'été", archetypeFeatureLevel6: "Foyer de l'ombre et du clair de lune", archetypeFeatureLevel10: "Chemins secrets ", archetypeFeatureLevel14: "Arpenteurs des rêves"},
    {id: 3, source:"Le Guide Complet de Xanathar", name:"Berger", archetypeFeatureLevel2: "Langage de la foret, totem spirituel", archetypeFeatureLevel6: "Puissant invocateur", archetypeFeatureLevel10: "Esprit Protecteur", archetypeFeatureLevel14: "Invocations loyales"},
    {id: 4, source:"Le Chaudron des Merveilles de Tasha", name:"Spores", archetypeFeatureLevel2: "Sorts de cercle, Halo de spores, Symbiote", archetypeFeatureLevel6: "Animation fongique", archetypeFeatureLevel10: "Dissémination de spores", archetypeFeatureLevel14: "Corps fongique"},
    {id: 5, source:"Le Chaudron des Merveilles de Tasha", name:"Astres", archetypeFeatureLevel2: "Carte stellaire, Forme stellaire", archetypeFeatureLevel6: "Présage cosmique", archetypeFeatureLevel10: "Constellations scintillantes", archetypeFeatureLevel14: "Plénitude stellaire"},
    {id: 6, source:"Le Chaudron des Merveilles de Tasha", name:"Fournaises", archetypeFeatureLevel2: "Sorts de cercle, Convocation des fournaises", archetypeFeatureLevel6: "Lien amélioré", archetypeFeatureLevel10: "Cautère spectral", archetypeFeatureLevel14: "Renaissance flamboyante"}
  ]
}

getEnsorceleurArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Lignée draconique",              archetypeFeatureLevel1: "Ancêtre dragon, Résistance Draconique", archetypeFeatureLevel6: "Affinité élémentaire", archetypeFeatureLevel14: "Ailes de dragon", archetypeFeatureLevel18: "Présence draconique"},
    {id: 1, source:"Manuel des Joueurs", name:"Magie sauvage",                  archetypeFeatureLevel1: "Pic de magie sauvage, Marée du chaos", archetypeFeatureLevel6: "Forcer la chance", archetypeFeatureLevel14: "Chaos contrôlé", archetypeFeatureLevel18: "Bombardement magique"},
    {id: 2, source:"Le Guide Complet de Xanathar", name:"Âme divine",                archetypeFeatureLevel1: "Magie divine,Favori des dieux", archetypeFeatureLevel6: "Soins améliorés", archetypeFeatureLevel14: "Ailes d'outre-monde", archetypeFeatureLevel18: "Rétablissement surnaturel"},
    {id: 3, source:"Le Guide Complet de Xanathar", name:"Magie des ombres",          archetypeFeatureLevel1: "Yeux des tenebres, Force de la tombe", archetypeFeatureLevel6: "Chien de mauvais augure", archetypeFeatureLevel14: "Traverser les ombres", archetypeFeatureLevel18: "Forme d'ombre"},
    {id: 4, source:"Le Guide Complet de Xanathar", name:"Sorcellerie des tempêtes",  archetypeFeatureLevel1: "Langage du vent, Magie tumultueuse", archetypeFeatureLevel6: "Coeur de la tempête, Guide des tempêtes", archetypeFeatureLevel14: "Fureur de la tempête", archetypeFeatureLevel18: "Âme du vent"},
    {id: 5, source:"Le Chaudron des Merveilles de Tasha", name:"Aberrance",                    archetypeFeatureLevel1: "Sorts psioniques, Discours télépathique", archetypeFeatureLevel6: "Magie psionique, Défenses psychiques", archetypeFeatureLevel14: "Révélation incarnée", archetypeFeatureLevel18: "Distorsion implosive"},
    {id: 6, source:"Le Chaudron des Merveilles de Tasha", name:"Âme mécanique",                archetypeFeatureLevel1: "Magie mécanique, Équilibre restauré", archetypeFeatureLevel6: "Bastion de loi", archetypeFeatureLevel14: "Transe Harmonique", archetypeFeatureLevel18: "Chevauchée mécanique"}
  ]
}

getGuerrierArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Champion",                      archetypeFeatureLevel3: "Critique amélioré", archetypeFeatureLevel7: "Athlète remarquable", archetypeFeatureLevel10: "Style de combat supplémentaire", archetypeFeatureLevel15: "Critique supérieur", archetypeFeatureLevel18: "Survivant"},
    {id: 1, source:"Manuel des Joueurs", name:"Chevalier occulte",             archetypeFeatureLevel3: "Incantation, Lien avec une arme", archetypeFeatureLevel7: "Magie de guerre", archetypeFeatureLevel10: "Frappe occulte", archetypeFeatureLevel15: "Charge arcanique", archetypeFeatureLevel18: "Magie de guerre améliorée"},
    {id: 2, source:"Manuel des Joueurs", name:"Maître de guerre",              archetypeFeatureLevel3: "Supériorité au combat, apprenti en temps de guerre", archetypeFeatureLevel7: "Connaitre son ennemi", archetypeFeatureLevel10: "Supériorité au combat améliorée", archetypeFeatureLevel15: "Implacable", archetypeFeatureLevel18: ""},
    {id: 3, source:"Le Guide Complet de Xanathar", name:"Archer arcanique",         archetypeFeatureLevel3: "Connaissances de l'Archer arcanique, tir arcanique (2 options)", archetypeFeatureLevel7: "Tir incurvé, flèche magique, tir arcanique (3 options)", archetypeFeatureLevel10: "Tir arcanique (4 options)", archetypeFeatureLevel15: "Toujours pret à tirer, Tir arcanique (5 options)", archetypeFeatureLevel18: "Tir arcanique (6 options, tirs améliorés)"},
    {id: 4, source:"Le Guide Complet de Xanathar", name:"Chevalier ",               archetypeFeatureLevel3: "Maîtrise supplémentaire, né sur un cheval, marque tenace", archetypeFeatureLevel7: "Manoeuvre défensive", archetypeFeatureLevel10: "On ne passe pas", archetypeFeatureLevel15: "Charge féroce", archetypeFeatureLevel18: "Défenseur vigilant"},
    {id: 5, source:"Le Guide Complet de Xanathar", name:"Samurai",                  archetypeFeatureLevel3: "Maîtrise supplémentaire, Combativité (5 pv temp)", archetypeFeatureLevel7: "Courtisan élégant", archetypeFeatureLevel10: "Volonté inébranlable, Combativité (10 pv temp)", archetypeFeatureLevel15: "Charge féroce, Combativité (15 pv temp)", archetypeFeatureLevel18: "Solide face à la mort"},
    {id: 6, source:"Le Chaudron des Merveilles de Tasha", name:"Chevalier runique",           archetypeFeatureLevel3: "Maîtrises supplémentaires, Sculpteur de runes, Puissance des géants", archetypeFeatureLevel7: "Bouclier runique", archetypeFeatureLevel10: "Grande carrure", archetypeFeatureLevel15: "Maître des runes", archetypeFeatureLevel18: "Mastodonte runique"},
    {id: 7, source:"Le Chaudron des Merveilles de Tasha", name:"Soldat psi",                  archetypeFeatureLevel3: "Pouvoir psionique", archetypeFeatureLevel7: "Adepte télékinétique", archetypeFeatureLevel10: "Esprit blindé", archetypeFeatureLevel15: "Rempart de force", archetypeFeatureLevel18: "Maître télékinétique"},
    {id: 8, source:"Explorer's Guide to Wildemount", name:"Combattant Echo",        archetypeFeatureLevel3: "Manifest echo, Unleash incarnation", archetypeFeatureLevel7: "Echo avatar", archetypeFeatureLevel10: "Shadow martyr", archetypeFeatureLevel15: "Reclaim potential", archetypeFeatureLevel18: "Legion of one"},
    {id: 9, source:"La Côte des Épées", name:"Chevalier du dragon pourpre", archetypeFeatureLevel3: "Cri de ralliement", archetypeFeatureLevel7: "Emissaire royal", archetypeFeatureLevel10: "Sursaut d'inspiration", archetypeFeatureLevel15: "Rempart", archetypeFeatureLevel18: ""}
  ]
}

getMagicienArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Abjuration",            archetypeFeatureLevel2: "Abjurateur érudit, Protection magique", archetypeFeatureLevel6: "Transmission de protection", archetypeFeatureLevel10: "Abjuration améliorée", archetypeFeatureLevel14: "Résistance aux sorts"},
    {id: 1, source:"Manuel des Joueurs", name:"Divination",            archetypeFeatureLevel2: "Devin érudit, Présage", archetypeFeatureLevel6: "Devin expert", archetypeFeatureLevel10: "Troisième oeil", archetypeFeatureLevel14: "Troisième oeil"},
    {id: 2, source:"Manuel des Joueurs", name:"Enchantement",          archetypeFeatureLevel2: "Enchanteur érudit, Regard hypnotique", archetypeFeatureLevel6: "Charme instinctif", archetypeFeatureLevel10: "Partage d'enchantement", archetypeFeatureLevel14: "Modification des souvenirs"},
    {id: 3, source:"Manuel des Joueurs", name:"Evocation",             archetypeFeatureLevel2: "Évocateur érudit, Façonneur de sorts", archetypeFeatureLevel6: "Tour de magie puissant", archetypeFeatureLevel10: "Évocation améliorée", archetypeFeatureLevel14: "Surcharge magique"},
    {id: 4, source:"Manuel des Joueurs", name:"Illusion",              archetypeFeatureLevel2: "Illusionniste érudit, Illusion mineure améliorée", archetypeFeatureLevel6: "Illusions malléables", archetypeFeatureLevel10: "Double illusoire", archetypeFeatureLevel14: "Réalité illusoire"},
    {id: 5, source:"Manuel des Joueurs", name:"Invocation",            archetypeFeatureLevel2: "Invocateur érudit, Invocation mineure", archetypeFeatureLevel6: "Transposition bénigne", archetypeFeatureLevel10: "Invocateur concentré", archetypeFeatureLevel14: "Invocations durables"},
    {id: 6, source:"Manuel des Joueurs", name:"Nécromancie",           archetypeFeatureLevel2: "Nécromancien érudit, Sinistre moisson", archetypeFeatureLevel6: "Serviteurs morts-vivants", archetypeFeatureLevel10: "Habitué à la mort", archetypeFeatureLevel14: "Contrôle des morts-vivants"},
    {id: 7, source:"Manuel des Joueurs", name:"Transmutation",         archetypeFeatureLevel2: "Transmuteur érudit, Alchimie mineure", archetypeFeatureLevel6: "Pierre du transmuteur", archetypeFeatureLevel10: "Métamorphe", archetypeFeatureLevel14: "Maître transmuteur"},
    {id: 8, source:"Explorer's Guide to Wildemount", name:"Graviturgie",    archetypeFeatureLevel2: "Chronal shift, Temporal awareness", archetypeFeatureLevel6: "Momentary stasis", archetypeFeatureLevel10: "Arcane abeyance", archetypeFeatureLevel14: "Convergent future"},
    {id: 9, source:"Explorer's Guide to Wildemount", name:"Chronurgie",     archetypeFeatureLevel2: "Adjust density", archetypeFeatureLevel6: "Gravity well", archetypeFeatureLevel10: "Violent attraction", archetypeFeatureLevel14: "Event horizon"},
    {id: 10, source:"Le Guide Complet de Xanathar", name:"Magie de guerre", archetypeFeatureLevel2: "Déviation arcanique, esprit tactique", archetypeFeatureLevel6: "Surtension", archetypeFeatureLevel10: "Magie durable", archetypeFeatureLevel14: "Voile de déviation"},
    {id: 11, source:"Le Chaudron des Merveilles de Tasha", name:"Chantelame",         archetypeFeatureLevel2: "Formation martiale et artistique, Chant de lame", archetypeFeatureLevel6: "Attaque supplémentaire", archetypeFeatureLevel10: "Chant de défense", archetypeFeatureLevel14: "Chant de victoire"},
    {id: 12, source:"Le Chaudron des Merveilles de Tasha", name:"Ordre des scribes",  archetypeFeatureLevel2: "Plume du mage, Grimoire éveillé", archetypeFeatureLevel6: "Érudition réfiée", archetypeFeatureLevel10: "Maître scribe", archetypeFeatureLevel14: "Union avec le verbe"}

  ]
}

getMoineArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Main ouverte",        archetypeFeatureLevel3: "Technique de la main ouverte", archetypeFeatureLevel6: "Intégrité physique", archetypeFeatureLevel11: "Tranquilité", archetypeFeatureLevel17: "Paume frémissante"},
    {id: 1, source:"Manuel des Joueurs", name:"Ombre",               archetypeFeatureLevel3: "Arts de l'ombre", archetypeFeatureLevel6: "Pas de l'ombre", archetypeFeatureLevel11: "Linceul d'ombre", archetypeFeatureLevel17: "Opportuniste"},
    {id: 2, source:"Manuel des Joueurs", name:"Quatre éléments",     archetypeFeatureLevel3: "Disciple des éléments", archetypeFeatureLevel6: "Discipline élémentaire", archetypeFeatureLevel11: "Discipline élémentaire", archetypeFeatureLevel17: "Discipline élémentaire"},
    {id: 3, source:"Le Chaudron des Merveilles de Tasha", name:"Astre intérieur",   archetypeFeatureLevel3: "Bras astraux", archetypeFeatureLevel6: "Visage astral", archetypeFeatureLevel11: "Corps de l'astre intérieur", archetypeFeatureLevel17: "Astre intérieur accompli"},
    {id: 4, source:"Le Chaudron des Merveilles de Tasha", name:"Miséricorde",       archetypeFeatureLevel3: "Instruments de charité", archetypeFeatureLevel6: "Main guérisseuse, Main meurtrissante", archetypeFeatureLevel11: "Caresse médicale, Déluge de soins et de meurtrissures", archetypeFeatureLevel17: "Main de l'ultime miséricorde"},
    {id: 5, source:"Le Guide Complet de Xanathar", name:"Âme solaire",    archetypeFeatureLevel3: "Rayon de soleil radiant", archetypeFeatureLevel6: "Vague brulante", archetypeFeatureLevel11: "Éruption solaire ardente", archetypeFeatureLevel17: "Bouclier solaire"},
    {id: 6, source:"Le Guide Complet de Xanathar", name:"Kensei",         archetypeFeatureLevel3: "Voie du kensei (2 armes)", archetypeFeatureLevel6: "Uni avec la lame, Voie du kensei (3 armes)", archetypeFeatureLevel11: "Lame affutée, Voie du kensei (4 armes)", archetypeFeatureLevel17: "Précision infaillible, Voie du kensei (5 armes)"},
    {id: 7, source:"Le Guide Complet de Xanathar", name:"Maître Ivre",    archetypeFeatureLevel3: "Maîtrises supplémentaires, Technique de l'homme ivre", archetypeFeatureLevel6: "Chancellements éméchés", archetypeFeatureLevel11: "Chance de l'ivrogne", archetypeFeatureLevel17: "Frénésie alcoolisée"},
    {id: 8, source:"La Côte des Épées", name:"Longue Mort", archetypeFeatureLevel3: "Caresse de la mort", archetypeFeatureLevel6: "L'heure de la moisson", archetypeFeatureLevel11: "Maîtrise de la mort", archetypeFeatureLevel17: "Caresse de la longue mort"},
    {id: 9, source:"Le trésor draconique de Fizban", name:"Dragon Ascendant", archetypeFeatureLevel3: "Disciple draconique, Souffle draconique", archetypeFeatureLevel6: "Ailes déployées", archetypeFeatureLevel11: "Aspect du dragon", archetypeFeatureLevel17: "Aspect ascendant"}
  ]
}

getPaladinArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Dévotion",        archetypeFeatureLevel3: "Sorts de serment, Canalisation d'énergie divine", archetypeFeatureLevel7: "Aura de dévotion (3m)", archetypeFeatureLevel15: "Pureté de l'esprit", archetypeFeatureLevel18: "Aura de dévotion (9m)", archetypeFeatureLevel20: "Halo sacré", paladinCanalisationDivine: "Arme sacrée, Renvoi des impies"},
    {id: 1, source:"Manuel des Joueurs", name:"Anciens",         archetypeFeatureLevel3: "Sorts de serment, Canalisation d'énergie divine", archetypeFeatureLevel7: "Aura de résistance (3m)", archetypeFeatureLevel15: "Sentinelle immortelle", archetypeFeatureLevel18: "Aura de résistance (9m)", archetypeFeatureLevel20: "Champion antique", paladinCanalisationDivine: "Colère de la nature, Renvoi de l'athée"},
    {id: 2, source:"Manuel des Joueurs", name:"Vengeance",       archetypeFeatureLevel3: "Sorts de serment, Canalisation d'énergie divine", archetypeFeatureLevel7: "Infatigable vengeur", archetypeFeatureLevel15: "Âme vengeresse", archetypeFeatureLevel18: "", archetypeFeatureLevel20: "Ange de la vengeance", paladinCanalisationDivine: "Conspuer l'ennemi, Jurer inimitié"},
    {id: 3, source:"Le Guide du Maître", name:"Parjure",         archetypeFeatureLevel3: "Sorts de parjure, Canalisation d'énergie divine", archetypeFeatureLevel7: "Aura de haine (3m)", archetypeFeatureLevel15: "Résistance surnaturelle", archetypeFeatureLevel18: "Aura de haine (9m)", archetypeFeatureLevel20: "Seigneur de l'effroi", paladinCanalisationDivine: "Contrôle d'un mort-vivant, Aspect effroyable"},
    {id: 4, source:"Le Guide Complet de Xanathar", name:"Conquête",   archetypeFeatureLevel3: "Sorts de serment, Canalisation d'énergie divine", archetypeFeatureLevel7: "Aura de conquête (3m)", archetypeFeatureLevel15: "Réprimande méprisante", archetypeFeatureLevel18: "Aura de conquete (9m)", archetypeFeatureLevel20: "Conquérant invincible", paladinCanalisationDivine: "Étouffer la flamme de l'espoir, Régner avec une main de fer"},
    {id: 5, source:"Le Guide Complet de Xanathar", name:"Rédemption", archetypeFeatureLevel3: "Sorts de serment, Canalisation d'énergie divine", archetypeFeatureLevel7: "Aura du gardien (3m)", archetypeFeatureLevel15: "Protection spirituelle", archetypeFeatureLevel18: "Aura du gardien (9m)", archetypeFeatureLevel20: "Émissaire de la rédemption", paladinCanalisationDivine: "Émissaire de la paix, Réprimander la violence"},
    {id: 6, source:"Le Chaudron des Merveilles de Tasha", name:"Gloire",        archetypeFeatureLevel3: "Sorts de serment, Canalisation d'énergie divine", archetypeFeatureLevel7: "Aura d'entrain (1,5m)", archetypeFeatureLevel15: "Défense glorieuse", archetypeFeatureLevel18: "Aura d'entrain (3m)", archetypeFeatureLevel20: "Légende vivante", paladinCanalisationDivine: "Athlète d'exception, Châtiment exaltant"},
    {id: 7, source:"Le Chaudron des Merveilles de Tasha", name:"Guetteurs",     archetypeFeatureLevel3: "Sorts de serment, Canalisation d'énergie divine", archetypeFeatureLevel7: "Aura de la sentinelle (3m)", archetypeFeatureLevel15: "Réprimande vigilante", archetypeFeatureLevel18: "Aura de la sentinelle (9m)", archetypeFeatureLevel20: "Rempart des mortels", paladinCanalisationDivine: "Aplomb du Guetteur, Conjuration d'extraplanaire"},
    {id: 8, source:"La Côte des Épées", name:"Couronne",      archetypeFeatureLevel3: "Sorts de serment, Canalisation d'énergie divine", archetypeFeatureLevel7: "Allégeance divine", archetypeFeatureLevel15: "Volonté inflexible", archetypeFeatureLevel18: "", archetypeFeatureLevel20: "Champion exalté", paladinCanalisationDivine: "Défi du champion, Changer la donne"}
  ]
}

getRodeurArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Chasseur",                   archetypeFeatureLevel3: "Proie du chasseur", archetypeFeatureLevel7: "Tactiques défensives", archetypeFeatureLevel11: "Attaques multiples", archetypeFeatureLevel15: "Défense de chasseur supérieure"},
    {id: 1, source:"Manuel des Joueurs", name:"Maître des bêtes",           archetypeFeatureLevel3: "Compagnon du rôdeur", archetypeFeatureLevel7: "Entraînement exceptionnel", archetypeFeatureLevel11: "Fureur bestiale", archetypeFeatureLevel15: "Partage des sorts"},
    {id: 2, source:"Le Guide Complet de Xanathar", name:"Arpenteur de l'horizon",archetypeFeatureLevel3: "Magie de l'Arpenteur de l'horizon, Détection de portail, Guerrier planaire (1d8)", archetypeFeatureLevel7: "Pas éthéré", archetypeFeatureLevel11: "Frappe distante, Guerrier planaire (2d8)", archetypeFeatureLevel15: "Défense spectrale"},
    {id: 3, source:"Le Guide Complet de Xanathar", name:"Tueur de monstres",     archetypeFeatureLevel3: "Magie de Tueur de monstres, Sens du chasseur, Proie du tueur", archetypeFeatureLevel7: "Défense surnaturelle", archetypeFeatureLevel11: "Némésis des utilisateurs de magien", archetypeFeatureLevel15: "Contre-attaque du tueur"},
    {id: 4, source:"Le Guide Complet de Xanathar", name:"Traqueur des ténèbres", archetypeFeatureLevel3: "Magie de Traqueur des ténèbres, Embuscade effrayante, Vision des ombres", archetypeFeatureLevel7: "Mental d'acier", archetypeFeatureLevel11: "Rafale du traqueur", archetypeFeatureLevel15: "Esquive des ombres"},
    {id: 5, source:"Le Chaudron des Merveilles de Tasha", name:"Gardien des nuées",        archetypeFeatureLevel3: "Nuée spirituelle, Magie du Gardien des nuées", archetypeFeatureLevel7: "Marée frémissante", archetypeFeatureLevel11: "Nuée souveraine", archetypeFeatureLevel15: "Dispersion de la nuée"},
    {id: 6, source:"Le Chaudron des Merveilles de Tasha", name:"Vagabond féérique",        archetypeFeatureLevel3: "Coups effroyables, Magie du Vagabond féérique, Charme mystique", archetypeFeatureLevel7: "Fascination détournée", archetypeFeatureLevel11: "Renforts féériques", archetypeFeatureLevel15: "Vagabonds des brumes"},
    {id: 7, source:"Le trésor draconique de Fizban", name:"Maître-guivre",             archetypeFeatureLevel3: "Présent draconique, Compagne guivre", archetypeFeatureLevel7: "Lien de croc et d'écaille", archetypeFeatureLevel11: "Souffle de la guivre", archetypeFeatureLevel15: "Lien parachevé"}
  ]
}

getRoublardArchetypes() {
  return [ 
    {id: 0, source:"Manuel des Joueurs", name:"Voleur",              archetypeFeatureLevel3: "Mains lestes, Monte-en-l'air", archetypeFeatureLevel9: "Furtivité suprême", archetypeFeatureLevel13: "Utilisation d'objets magiques", archetypeFeatureLevel17: "Réflexes de voleur"},
    {id: 1, source:"Manuel des Joueurs", name:"Assassin",            archetypeFeatureLevel3: "Maîtrises supplémentaires, Assassinat", archetypeFeatureLevel9: "Expert en infiltration", archetypeFeatureLevel13: "Imposteur", archetypeFeatureLevel17: "Frappe mortelle"},
    {id: 2, source:"Manuel des Joueurs", name:"Arnaqueur Arcanique", archetypeFeatureLevel3: "Incantation, Escamotage et main du mage", archetypeFeatureLevel9: "Embuscade magique", archetypeFeatureLevel13: "Arnaqueur polyvalent", archetypeFeatureLevel17: "Voleur de sort"},
    {id: 3, source:"Le Guide Complet de Xanathar", name:"Bretteur",       archetypeFeatureLevel3: "Jeu de jambes sophistiqué, Audace désinvolte", archetypeFeatureLevel9: "Panache", archetypeFeatureLevel13: "Manoeuvre élégante", archetypeFeatureLevel17: "Maître dueliste"},
    {id: 4, source:"Le Guide Complet de Xanathar", name:"Conspirateur",   archetypeFeatureLevel3: "Maître des intrigues, maître tacticien", archetypeFeatureLevel9: "Manipulateur perspicace", archetypeFeatureLevel13: "Redirection", archetypeFeatureLevel17: "Âme de trompeur"},
    {id: 5, source:"Le Guide Complet de Xanathar", name:"Eclaireur",      archetypeFeatureLevel3: "Escarmoucheur, survivaliste", archetypeFeatureLevel9: "Mobilité supérieure", archetypeFeatureLevel13: "Maître de l'embuscade", archetypeFeatureLevel17: "Frappe soudaine"},
    {id: 6, source:"Le Guide Complet de Xanathar", name:"Enquêteur",      archetypeFeatureLevel3: "Détecteur de mensonges, Oeil perçant, Sagacité au combat", archetypeFeatureLevel9: "Attentif", archetypeFeatureLevel13: "Vision infaillible", archetypeFeatureLevel17: "Sens de la faiblesse"},
    {id: 7, source:"Le Chaudron des Merveilles de Tasha", name:"Âme acérée",        archetypeFeatureLevel3: "Pouvoir psionique, Lames psychiques", archetypeFeatureLevel9: "Lames spirituelles", archetypeFeatureLevel13: "Voile psychique", archetypeFeatureLevel17: "Rupture spirituelle"},
    {id: 8, source:"Le Chaudron des Merveilles de Tasha", name:"Phantôme",          archetypeFeatureLevel3: "Murmures des défunts, Lamentations sépulcrales", archetypeFeatureLevel9: "Bribes funèbres", archetypeFeatureLevel13: "Marche spectrale", archetypeFeatureLevel17: "Intime du trépas"}

    
  ]
}

getSorcierArchetypes() {
  return [
    {id: 0, source:"Manuel des Joueurs", name:"Archifée",          archetypeFeatureLevel1: "Liste de sort étendue, Présence féérique", archetypeFeatureLevel6: "Échappatoire brumeuse", archetypeFeatureLevel10: "Charmantes défenses", archetypeFeatureLevel14: "Sombres délires"},
    {id: 1, source:"Manuel des Joueurs", name:"Fiélon",            archetypeFeatureLevel1: "Liste de sort étendue, Bénédiction du ténébreux", archetypeFeatureLevel6: "Chance du ténébreux", archetypeFeatureLevel10: "Résistance fiélonne", archetypeFeatureLevel14: "Traversée des enfers"},
    {id: 2, source:"Manuel des Joueurs", name:"Grand ancien",      archetypeFeatureLevel1: "Liste de sort étendue, Esprit éveillé", archetypeFeatureLevel6: "Protection entropique", archetypeFeatureLevel10: "Bouclier mental", archetypeFeatureLevel14: "Asservissement"},
    {id: 3, source:"Le Guide Complet de Xanathar", name:"Céleste",      archetypeFeatureLevel1: "Liste de sort étendue, Tours de magie supplémentaires, Lumière curative", archetypeFeatureLevel6: "Âme radiante", archetypeFeatureLevel10: "Persévérance céleste", archetypeFeatureLevel14: "Vengeance ardente"},
    {id: 4, source:"Le Guide Complet de Xanathar", name:"Magelame",     archetypeFeatureLevel1: "Liste de sort étendue, Malédiction du magelame, guerrier des maléfices", archetypeFeatureLevel6: "spectre maudit", archetypeFeatureLevel10: "armure de maléfices", archetypeFeatureLevel14: "Maître des maléfices"},
    {id: 5, source:"Le Chaudron des Merveilles de Tasha", name:"Insondable",     archetypeFeatureLevel1: "Liste de sort étendue, Tentacule abyssal, Faveur de la mer", archetypeFeatureLevel6: "Âme océane, Tentacule gardien", archetypeFeatureLevel10: "Tentacules agrippants", archetypeFeatureLevel14: "Plongeon abyssal"},
    {id: 6, source:"Le Chaudron des Merveilles de Tasha", name:"Génie",           archetypeFeatureLevel1: "Liste de sort étendue, Conduit du génie", archetypeFeatureLevel6: "Présent élémentaire", archetypeFeatureLevel10: "Sanctuaire du génie", archetypeFeatureLevel14: "Souhait limité"},
    {id: 7, source:"La Côte des Épées", name:"Immortel",        archetypeFeatureLevel1: "Liste de sort étendue, Au sein des morts", archetypeFeatureLevel6: "Défier la mort", archetypeFeatureLevel10: "De nature immortelle", archetypeFeatureLevel14: "Vie indestructible"},
    {id: 8, source:"Le guide de Van Richten sur Ravenloft", name:"Mort-vivant", archetypeFeatureLevel1: "Liste de sort étendue, Forme d'effroi", archetypeFeatureLevel6: "Enfant de nécropole", archetypeFeatureLevel10: "Carapace nécrotique", archetypeFeatureLevel14: "Projection spirituelle"}

  ]
}





}
