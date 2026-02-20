/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { doctors } from "../assets/assets";
import { DoctorCardSkeleton } from "../components/LoadingSkeletons";
import { Search, SlidersHorizontal, X, ChevronLeft, ChevronRight } from "lucide-react";

const SPECIALITIES = [
  "All",
  "Physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatricians",
  "Neurologist",
  "Gastroenterologist",
  "Cardiologist",
  "Orthopedic",
  "Psychiatrist",
  "Ophthalmologist",
];

const DOCTORS_PER_PAGE = 8;

// ── Single Doctor Card ──
const DoctorCard = ({ doctor }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <Link
      to={`/doctorprofile/${doctor._id}`}
      aria-label={`View ${doctor.name}, ${doctor.speciality}`}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {/* Image */}
      <div className="relative bg-blue-50 dark:bg-gray-700 overflow-hidden h-44 sm:h-48 md:h-52">
        {!imgLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
        )}
        <img
          src={doctor.image}
          alt={`Dr. ${doctor.name}`}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
        />
      </div>
      {/* Info */}
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-1.5 text-xs text-green-500 font-medium mb-1.5">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
          Available
        </div>
        <p className="font-bold text-gray-900 dark:text-white text-sm sm:text-base leading-tight">
          {doctor.name}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5">
          {doctor.speciality}
        </p>
      </div>
    </Link>
  );
};

// ── Pagination Button ──
const PageBtn = ({ children, active, disabled, onClick, ariaLabel }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={ariaLabel}
    aria-current={active ? "page" : undefined}
    className={`
      min-w-[36px] h-9 px-2 rounded-xl text-sm font-semibold transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
      ${active
        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105"
        : disabled
        ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
        : "text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400"
      }
    `}
  >
    {children}
  </button>
);

const AllDoctors = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  // Reset to page 1 whenever filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSpeciality, searchQuery]);

  // Filtered list
  const filteredDoctors = useMemo(() => {
    let result =
      selectedSpeciality === "All"
        ? doctors
        : doctors.filter(
            (d) =>
              d.speciality?.toLowerCase() === selectedSpeciality.toLowerCase()
          );
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.speciality?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedSpeciality, searchQuery]);

  // Pagination maths
  const totalPages = Math.max(1, Math.ceil(filteredDoctors.length / DOCTORS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIdx = (safePage - 1) * DOCTORS_PER_PAGE;
  const pageDoctors = filteredDoctors.slice(startIdx, startIdx + DOCTORS_PER_PAGE);

  // Page numbers to show (always show max 5 page buttons)
  const getPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (safePage <= 3) return [1, 2, 3, 4, 5];
    if (safePage >= totalPages - 2)
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [safePage - 2, safePage - 1, safePage, safePage + 1, safePage + 2];
  };

  const goToPage = (p) => {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── PAGE HEADER ── */}
        <header className="text-center mb-8 pt-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            All <span className="text-blue-600 dark:text-blue-400">Doctors</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
            {loading
              ? "Loading..."
              : `Showing ${startIdx + 1}–${Math.min(startIdx + DOCTORS_PER_PAGE, filteredDoctors.length)} of ${filteredDoctors.length} doctor${filteredDoctors.length !== 1 ? "s" : ""}`}
          </p>
        </header>

        {/* ── SEARCH BAR ── */}
        <div className="relative mb-5 max-w-xl mx-auto">
          <Search
            size={17}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search by name or speciality…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search doctors by name or speciality"
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm shadow-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* ── MOBILE FILTER TOGGLE ── */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          aria-expanded={showFilter}
          aria-controls="filter-panel"
          className="lg:hidden flex items-center gap-2 mb-4 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 shadow-sm w-full justify-between"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal size={15} aria-hidden="true" />
            Filter: <strong>{selectedSpeciality}</strong>
          </span>
          {selectedSpeciality !== "All" && (
            <span className="w-2 h-2 bg-blue-500 rounded-full" aria-label="Filter active" />
          )}
        </button>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-7">

          {/* ── SIDEBAR FILTER ── */}
          <aside
            id="filter-panel"
            aria-label="Filter by speciality"
            className={`${showFilter ? "block" : "hidden"} lg:block w-full lg:w-56 xl:w-60 flex-shrink-0`}
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm sticky top-24">
              <p className="font-bold text-gray-800 dark:text-white text-sm mb-3">
                Browse Specialities
              </p>
              <ul className="space-y-1" role="list">
                {SPECIALITIES.map((spec) => (
                  <li key={spec}>
                    <button
                      onClick={() => {
                        setSelectedSpeciality(spec);
                        setShowFilter(false);
                      }}
                      aria-pressed={selectedSpeciality === spec}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between ${
                        selectedSpeciality === spec
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      {spec}
                      {selectedSpeciality === spec && (
                        <span className="text-xs opacity-80">✓</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ── DOCTORS GRID ── */}
          <main className="flex-1" aria-label="Doctors list">
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {[...Array(DOCTORS_PER_PAGE)].map((_, i) => (
                  <DoctorCardSkeleton key={i} />
                ))}
              </div>
            ) : filteredDoctors.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-5xl mb-4">🔍</p>
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  No doctors found
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 mb-5">
                  Try a different name or speciality
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSpeciality("All");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                {/* Grid */}
                <div
                  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
                  role="list"
                  aria-label={`Page ${safePage} of doctors`}
                >
                  {pageDoctors.map((doctor) => (
                    <DoctorCard key={doctor._id} doctor={doctor} />
                  ))}
                </div>

                {/* ── PAGINATION ── */}
                {totalPages > 1 && (
                  <nav
                    aria-label="Doctors pagination"
                    className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
                  >
                    {/* Results info */}
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 order-2 sm:order-1">
                      Page <strong className="text-gray-700 dark:text-gray-200">{safePage}</strong> of{" "}
                      <strong className="text-gray-700 dark:text-gray-200">{totalPages}</strong>
                      {" · "}
                      {filteredDoctors.length} doctors total
                    </p>

                    {/* Page buttons */}
                    <div className="flex items-center gap-1 order-1 sm:order-2">
                      {/* Prev */}
                      <PageBtn
                        disabled={safePage === 1}
                        onClick={() => goToPage(safePage - 1)}
                        ariaLabel="Previous page"
                      >
                        <ChevronLeft size={16} />
                      </PageBtn>

                      {/* First page shortcut */}
                      {getPageNumbers()[0] > 1 && (
                        <>
                          <PageBtn onClick={() => goToPage(1)} ariaLabel="Page 1">1</PageBtn>
                          {getPageNumbers()[0] > 2 && (
                            <span className="text-gray-400 px-1 text-sm">…</span>
                          )}
                        </>
                      )}

                      {/* Page numbers */}
                      {getPageNumbers().map((p) => (
                        <PageBtn
                          key={p}
                          active={p === safePage}
                          onClick={() => goToPage(p)}
                          ariaLabel={`Page ${p}`}
                        >
                          {p}
                        </PageBtn>
                      ))}

                      {/* Last page shortcut */}
                      {getPageNumbers().at(-1) < totalPages && (
                        <>
                          {getPageNumbers().at(-1) < totalPages - 1 && (
                            <span className="text-gray-400 px-1 text-sm">…</span>
                          )}
                          <PageBtn
                            onClick={() => goToPage(totalPages)}
                            ariaLabel={`Page ${totalPages}`}
                          >
                            {totalPages}
                          </PageBtn>
                        </>
                      )}

                      {/* Next */}
                      <PageBtn
                        disabled={safePage === totalPages}
                        onClick={() => goToPage(safePage + 1)}
                        ariaLabel="Next page"
                      >
                        <ChevronRight size={16} />
                      </PageBtn>
                    </div>
                  </nav>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
