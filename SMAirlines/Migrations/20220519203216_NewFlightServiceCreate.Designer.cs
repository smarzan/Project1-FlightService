﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SMAirlines.Data;

#nullable disable

namespace SMAirlines.Migrations
{
    [DbContext(typeof(SMAContext))]
    [Migration("20220519203216_NewFlightServiceCreate")]
    partial class NewFlightServiceCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("SMAirlines.Models.ConfirmationNumber", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("FlightNumber")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("OwnerId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("ConfirmationNumbers");
                });

            modelBuilder.Entity("SMAirlines.Models.Flight", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ArrivalAirport")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("ArrivalDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("ArrivalTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("DepartureAirport")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DepartureDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DepartureTime")
                        .HasColumnType("datetime2");

                    b.Property<int>("FlightNumber")
                        .HasColumnType("int");

                    b.Property<int>("PassengerLimit")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Flights");
                });

            modelBuilder.Entity("SMAirlines.Models.Passenger", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("FlightId")
                        .HasColumnType("int");

                    b.Property<string>("Job")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("FlightId");

                    b.ToTable("Passengers");
                });

            modelBuilder.Entity("SMAirlines.Models.ConfirmationNumber", b =>
                {
                    b.HasOne("SMAirlines.Models.Passenger", "Owner")
                        .WithMany("Bookings")
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("SMAirlines.Models.Passenger", b =>
                {
                    b.HasOne("SMAirlines.Models.Flight", null)
                        .WithMany("Passengers")
                        .HasForeignKey("FlightId");
                });

            modelBuilder.Entity("SMAirlines.Models.Flight", b =>
                {
                    b.Navigation("Passengers");
                });

            modelBuilder.Entity("SMAirlines.Models.Passenger", b =>
                {
                    b.Navigation("Bookings");
                });
#pragma warning restore 612, 618
        }
    }
}